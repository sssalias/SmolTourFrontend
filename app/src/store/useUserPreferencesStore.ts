import { defineStore } from 'pinia'
import axios from "axios";

export const useUserPreferencesStore = defineStore({
    id: 'user-preferences-store',
    state: () => ({

    }),
    actions: {
        async getAll() {
            return await axios.get('https://backend.umom.pro/preferences/get/all')
        },
        async getUsers(accessToken:any) {
            return await axios.get('https://backend.umom.pro/preferences/get', {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            })
        },
        async addUserPreference(id:any, accessToken:any) {
            const data = {
                id: id
            }
            return await axios.put('https://backend.umom.pro/preferences/add', JSON.stringify(data),{
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: 'Bearer ' + accessToken
                }
            })
        }
    }
})