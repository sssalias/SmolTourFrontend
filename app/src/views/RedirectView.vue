<template>
  <div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import axios from "axios";

import {useUserStore} from "@/store/useUserStore";

export default defineComponent({
  setup() {


    return {}
  },
  data: () => ({
    store: useUserStore(),
    code: '',
    jsonData: {}
  }),
  methods: {
    getCode():any {
      return this.$route.query.code
    },
    async getTokens(code:any) {
      const payload = {
        grant_type: 'authorization_code',
        client_id: 'umom-client',
        code: code,
        redirect_uri: 'http://localhost:8081/redirect',
        code_verifier: 'aC5wcXDd3cxTGZ4womiXDTgsmYfqChDxckB1YP0TeIM'
      }
      await axios.post('https://auth.umom.pro/realms/umom-realm/protocol/openid-connect/token', payload, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
          .then(res => {
            localStorage.setItem('access_token', res.data.access_token)
            localStorage.setItem('refresh_token', res.data.refresh_token)
            localStorage.setItem('id_token', res.data.id_token)
            this.store.makeAuth()
            console.log(localStorage)
          })
          .catch(e => console.log(e))
    }
  },
  mounted() {
    this.code = this.getCode()
    this.getTokens(this.code)
  }
})
</script>

<style scoped>

</style>