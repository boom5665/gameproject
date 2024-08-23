<template>
  <client-only>
    <quill-editor v-model="content" :options="editorOptions"></quill-editor>
  </client-only>
</template>

<script>
export default {
  name: 'QuillEditorComponent',
  components: {
    quillEditor: process.client ? require('vue-quill-editor').quillEditor : null
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      content: this.value,
      editorOptions: {
        theme: 'snow',
        placeholder: 'ใส่ข้อความที่นี่' // เพิ่ม placeholder ที่นี่
      }
    };
  },
  mounted() {
    if (process.client) {
      this.editorOptions.bounds = document.body; // ตั้งค่า bounds หลังจากที่มั่นใจว่าอยู่ในฝั่ง client
    }
  },
  watch: {
    content(newValue) {
      this.$emit('input', newValue);
    }
  }
};
</script>

<style scoped>
/* เพิ่มการกำหนดค่าหรือการสไตล์สำหรับ quill-editor ที่นี่ถ้าจำเป็น */
</style>
