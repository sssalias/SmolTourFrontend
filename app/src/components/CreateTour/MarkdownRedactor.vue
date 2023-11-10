<template>
  <div class="redactor">
    <editor
        class="editor"
        aria-placeholder="Описание тура"
        @change="logInfo"
        v-model="d"
        api-key="hovfw875rn1kj4kjhakr3nf9ybjmgdfyath86ghxpoq1ssud"
        :init="{
         height: 500,
         menubar: false,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
       }"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Editor from '@tinymce/tinymce-vue'
export default defineComponent({
  data: () => ({
    d: ''
  }),
  components: {
    'editor': Editor
  },
  methods: {
    logInfo(e:any) {
      console.log(e.target)
    }
  }
})
</script>

<style lang="scss">
  .redactor {
    width: 100%;

    .editor {
      width: 100%;
    }
  }

</style>