import { defineStore } from 'pinia'


export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        isAuth: false
    }),
    actions: {
        makeAuth() {
            this.isAuth = true
        }
    }

})