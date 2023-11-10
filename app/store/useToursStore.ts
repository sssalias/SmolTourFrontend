import { defineStore } from 'pinia'
import Tour from "../models/Tour";
import axios from "axios";

export const useTodoStore = defineStore({
    id: 'todo',
    state: () => ({
        data: {}
    }),
    actions: {
        async createTour(tour:Tour) {
            const data:object = {
                title: tour._title,
                description: tour._description,
                contact: tour._contact,
                company: tour._company,
                photoId: tour._img_id
            }
            await axios.post('https://umom.pro/tours/create/', JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    console.log(res)})
                .catch(e => console.log(e))
        }
    }
})