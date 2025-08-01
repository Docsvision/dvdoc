<template lang="pug">
.grid
	.left
		.loading(v-if="props.loading")
			q-spinner( color="primary" size="8em" :thickness="5")
		template(v-if="!props.loading && filtered.length === 0")
			.notfound Ничего нет. Попробуйте изменить запрос.
		template(v-for="version in filtered" :key="version.id")
			.build(:id="version.id")
				.vers(:id="version.fileVersion" :class="{'vers-grid': version.groupId !== 0}")
					.row.items-center
						.q-mr-md(v-if="version.metadata.isPublic === true") Обновление
						q-btn(dense unelevated color="accent" v-if="version.metadata.isPublic === true" @click="copy(version)").q-mr-md.copy
							component(:is="SvgIcon" name="source-branch" color="white")
							q-tooltip Скопировать ссылку
						a(:class="{ link : version.metadata.downloadLink}" :href="version.metadata.downloadLink" target="_blank" v-if="version.metadata.isPublic === true").link
							component(:is="WordHighlighter" :query="filter") {{version.fileVersion}}
						div(v-else) Войдет в следующее накопительное обновление
					div(v-if="version.groupId !== 0")
						p(class="group-title") Входит в 
							a(class="group-link" :href="getRedirectLink(version)") {{groupTitleById(version.groupId)}}
					component(:is="Dateblock" :filter="filter" :version="version")

				q-list(v-intersection="intersectionObject" :id="version.id")
					template(v-for="(item) in version.children")
						q-expansion-item(v-if="item.children.length > 0"
							:key="item.id"
							:label="item.head"
							header-class="hd"
							:icon="showIcon(item.icon)"
							expand-separator
							expand-icon="img:/_/img/chevron-down.svg"
							:model-value="item.model"
							@click="myitems.toggleModel(item)")

							q-card-section(v-for="el in item.children" :key="el.title")
								.smallgrid
									.label
										component(:is="WordHighlighter" :query="filter") {{el.title}}
									.sborka(v-if="!version.metadata.isPublic")
										component(:is="WordHighlighter" :query="filter") {{el.fileVersion}}
									div(v-else)
									.text
										component(:is="WordHighlighter" :query="filter") {{el.description}}
										br
										q-btn(v-if="el.detailed" unelevated color="accent" label="Еще" size="xs" @click="more(item.id, el.title)")
								.more.hid(:id="setId(item.id, el.title)" v-if="el.detailed")
									div(v-html="el.detailed")

				hr( v-if="version.metadata.isPublic === false")
	.side
		.sidebar
			q-input(dense debounce="300" placeholder="Фильтр" color="primary" v-model="filter" clearable clear-icon="img:/_/img/close-circle-outline.svg" @clear="clear").search
				template(v-slot:prepend)
					SvgIcon(name="magnify").magnify
			br
			.sod Содержание
			.list
				.empt(v-for="item in filtered" @click="handleScroll(item.fileVersion)" :key="item.fileVersion" :class="calcClass(item.id)")
					span(v-if="item.metadata.isPublic === true") {{item.fileVersion}}
					span(v-else) Войдет в следующее обновление
			NotFound(:show="errorDialog" @close="errorDialog = false")
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { scroll } from 'quasar'
import WordHighlighter from 'vue-word-highlighter'
import { useItems } from '@/stores/items'
import { useGroups } from '@/stores/groups'
import type { Ref } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'
import Dateblock from '@/components/Dateblock.vue'
import axios from 'axios'
import NotFound from '@/components/NotFound.vue'
import { storeToRefs } from 'pinia'

const props = defineProps({
	loading: {
		type: Boolean,
		default: true,
	},
})

const inView: Ref<String[]> = ref([])

const add = (e: string) => {
	remove(e)
	inView.value.push(e)
}
const remove = (e: string) => {
	let index
	while ((index = inView.value.indexOf(e)) > -1) {
		inView.value.splice(index, 1)
	}
}
const intersection = (entry: any) => {
	if (entry.isIntersecting === true) {
		add(entry.target.id)
	} else {
		remove(entry.target.id)
	}
}
const intersectionObject = {
	handler: intersection,
	cfg: {
		rootMargin: '-120px',
	},
}
const myitems = useItems()
const myGoups = useGroups()

const { groupTitleById } = storeToRefs(myGoups)

const { getScrollTarget, setVerticalScrollPosition } = scroll
const filter = ref('')
const clear = () => {
	filter.value = ''
}

const handleScroll = (e: string) => {
	const ele = document.getElementById(e) // You need to get your element here
	const target = getScrollTarget(ele!)
	const offset = ele!.offsetTop - 75
	const duration = 300
	setVerticalScrollPosition(target, offset, duration)
}

const filterByLabel = (array: any, searchTerm: string) => {
	return array.reduce((prev: any, curr: any) => {
		const children = curr.children ? filterByLabel(curr.children, searchTerm) : undefined

		return curr.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			curr.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			curr.fileVersion?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			children?.length > 0
			? [...prev, { ...curr, children }]
			: prev
	}, [])
}

const filtered = computed(() => {
	if (filter.value.length > 1) {
		return filterByLabel(myitems.versions, filter.value)
	}
	return myitems.versions
})

watchEffect(() => {
	if (filter.value.length > 1) {
		myitems.expandAll()
		myitems.filterActive = true
	} else myitems.filterActive = false
})

const setId = (id: number, label: string) => {
	return id + label
}

const more = (id: number, label: string) => {
	let el = document.getElementById(id + label)
	el?.classList.toggle('hid')
}
const calcClass = (e: number) => {
	if (inView.value.some((el) => el == e.toString())) {
		return 'visib'
	} else return ''
}
const showIcon = (icon: string) => {
	return 'img:/_/img/' + icon + '.svg'
}
const errorDialog = ref(false)

const calcLink = (e: Version) => {
	if (e.metadata.downloadLink === null) {
		return ''
	} else return 'link'
}

async function copyURL(mytext: string) {
	try {
		await navigator.clipboard.writeText(mytext)
	} catch ($e) {
		console.log('Can not copy')
	}
}

const copy = (e: Version) => {
	const cleanUrl = window.location.href.split('#')[0]
	const copiedUrl = cleanUrl + '#' + e.fileVersion
	copyURL(copiedUrl)
}

const getProductVersionName = (fileVersion: string) => {
	if (fileVersion.startsWith("5")) return "dv5";

	return "dv6";
}

const getRedirectLink = (version: Myversion) => {
	if (!version.groupId) return

	const url = "/" + getProductVersionName(version.fileVersion) + `/timeline?groupId=${version.groupId}` 
	return url
}
</script>

<style scoped lang="scss">
:deep(.q-item) {
	padding: 8px 0;

	@media screen and (min-width: 1024px) {
		padding: 8px 16px;
	}
}

a:hover {
	text-decoration: none;
}

.smallgrid {
	display: grid;
	grid-template-columns: 1fr;
	column-gap: 3.2rem;
	font-size: $text-font-size;
	align-items: start;

	@media screen and (min-width: 1024px) {
		padding-left: 4rem;
		grid-template-columns: 96px auto 1fr;
		font-size: $text-font-size-desktop;
	}
}

.q-card__section {
	padding: 16px 0;

	@media screen and (min-width: 1024px) {
		padding: 16px;
	}
}

.label {
	font-weight: 500;
	font-style: italic;
}

.copy {
	display: none;

	@media screen and (min-width: 600px) {
		display: block;
	}
}

.notfound {
	margin-top: 3rem;
	padding: 1rem;
	border: 1px solid pink;
	background: $pink-1;
	font-size: 1rem;
}

.sborka {
	font-family: Consolas, 'courier new', monospace;
	font-weight: 600;
	color: crimson;
	color: teal;
	background-color: #f5f2f0;
	border: 1px solid rgba(0, 0, 0, 0.12);
	font-size: 0.8rem;
	text-align: center;
	padding: 0 5px;
}

.more {
	font-size: $text-font-size;
	margin-left: 4rem;

	@media screen and (min-width: 1024px) {
		font-size: $text-font-size-desktop;
	}

	&.hid {
		display: none;
	}

	& * {
		font-size: $text-font-size!important;

		@media screen and (min-width: 1024px) {
			font-size: $text-font-size-desktop!important;
		}
	}
}

.empt {
	border-left: 3px solid transparent;
}

.visib {
	@media screen and (min-width: 1400px) {
		border-left: 3px solid $accent;
	}
}

.link {
	cursor: pointer;
	color: $accent;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
}

.search {
	max-width: 230px;
}

.myrow {
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background: #eee;
}

.magnify {
	width: 22px;
}

.zag {
	padding: 2rem 0 0;
	font-size: 2.25rem;
	grid-column: 1/2;
}

hr {
	border: none;
	border-top: 3px double #333;
	color: #333;
	overflow: visible;
	text-align: center;
	height: 5px;
	margin-top: 2rem;
}

hr:after {
	background: #fff;
	content: '☑';
	padding: 0 6px;
	position: relative;
	top: -21px;
	font-size: 24px;
}

.loading {
	position: fixed;
	height: 100vh;
	width: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
