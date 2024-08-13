<template>
  <client-only>
    <quill-editor v-model="content" :options="editorOptions"></quill-editor>
  </client-only>
</template>

<script>
let quillEditor;

if (process.client) {
  quillEditor = require('vue-quill-editor').quillEditor;
  require('quill/dist/quill.core.css');
  require('quill/dist/quill.snow.css');
  require('quill/dist/quill.bubble.css');
}

export default {
  name: 'QuillEditorComponent',
  components: {
    quillEditor
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
        theme: 'snow'
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
