import { defineStore } from 'pinia'

import axios from "axios";

export default defineStore({
    id: 'home-tour-list',
    state: () => ({
        tours: [],
        images: []
    }),
    actions: {
        async getTours() {
            return await axios.get('https://backend.umom.pro/tours/get/all')
        },
        async getImage(photo_id:any) {
            // console.log('adasd')
            return `https://backend.umom.pro/photos/download?id=${photo_id}`
        }
    }
})