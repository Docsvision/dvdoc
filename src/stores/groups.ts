import { defineStore } from 'pinia'

export const useGroups = defineStore({
    id: 'groups',
    state: () => ({
        groups: [] as Group[],
    }),
    getters: {
        groupTitleById: (state) => (groupId: number) => state.groups.find(group => group.id === groupId)?.title ?? ""
    },
    actions: {
        setGroups(payload: Group[]) {
            this.groups = payload
        },
    },
})
