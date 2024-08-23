<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal-content">
      <!-- <button class="close" @click="closeModal">✖</button> -->
      <slot></slot>
      <!-- <button class="go-to-page" @click="goToPage">ไปยังหน้าถัดไป</button> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    goToPage() {
      this.$emit("go-to-page");
    },
  },
};
</script>

<style scoped>
.M-Create-Backgroud button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    color: red;
    cursor: pointer;
}
.M-Create-Backgroud button:hover {
    background-color: white;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  width: max-content;
  display: flex;
  align-items: center;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.go-to-page {
  margin-top: 20px;
  padding: 10px;
  background-color: #49d1e0;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
</style>
