import { defineStore } from 'pinia'
import Tour from "@/models/Tour";
import axios from "axios";

export const useTourStore = defineStore({
    id: '',
    state: () => ({
        value: ''
    }),
    actions: {
        async createTour(tour:Tour, accessToken:any, photo_id:any) {
            const data = {
                title: tour._title,
                description: tour._description,
                contact: tour._contact,
                company: tour._company,
                photo_id: photo_id
            }
            await axios.put('https://backend.umom.pro/tours/create', JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
                }
            })
                .then(res => {
                    console.log(res)})
                .catch(e => console.log(e))
        },
        async uploadImg(tour:Tour, accessToken:any) {
            const formData = new FormData()
            const data:any = tour._img
            formData.append('photo', data)
            return await axios.post('https://backend.umom.pro/photos/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + accessToken
                }
            })
        },
    }
})