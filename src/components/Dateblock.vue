<template lang="pug">
.row.items-center.q-pr-sm
	.date.q-mr-lg
		// span(v-if="props.version.metadata.publishDate") {{props.version.metadata.publishDate.split('T')[0]}}
		span(v-if="props.version.metadata.publishDate") {{ formattedDate }}
		// span(v-else) -- | --
	q-btn(v-if="filter.length < 1" dense flat round
		color="accent"
		@click="handleClick($event, props.version)" ).expand-btn
		q-tooltip(anchor="top middle" self="bottom middle") Shif-Click - распахнуть все
		component(:is="SvgIcon" name="unfold-more-horizontal")
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { date } from 'quasar'
import SvgIcon from '@/components/SvgIcon.vue'
import { useItems } from '@/stores/items'

const props = defineProps<{
	filter: String
	version: Myversion
}>()

const myitems = useItems()

const handleClick = (e: any, version: any) => {
	if (e.shiftKey) {
		myitems.toggleAll()
	} else myitems.expandBlock(version)
}

const { formatDate } = date
const formattedDate = computed(() => {
	return date.formatDate(props.version.metadata.publishDate, 'DD MMM YYYY', {
		monthsShort: [
			'янв',
			'фев',
			'мар',
			'апр',
			'май',
			'июн',
			'июл',
			'авг',
			'сен',
			'окт',
			'ноя',
			'дек',
		],
	})
})
</script>

<style scoped lang="scss">
//@import '@/assets/css/colors.scss';
.expand-btn {
	position: absolute;
	top: 4px;
	right: 12px;

	@media screen and (min-width: 1024px) {
		position: static;
	}
}
</style>
