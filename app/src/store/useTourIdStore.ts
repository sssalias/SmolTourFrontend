import { defineStore } from 'pinia'
import Tour from "@/models/Tour";
import axios from "axios";

export const useTourIdStore = defineStore({
    id: 'tour-id',
    state: () => ({

    }),
    actions: {
        async getTour(id:any) {
            return await axios.get(`https://backend.umom.pro/tours/get/${id}`)
        }
    }
})