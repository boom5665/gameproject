<template>
  <nav>
    <ul class="pagination">
      <li :class="{ disabled: currentPage === 1 }">
        <a @click="changePage(currentPage - 1)">«</a>
      </li>
      <!-- Display a maximum of 10 pages -->
      <li v-if="startPage > 1">
        <a @click="changePage(1)">1</a>
        <span>...</span>
      </li>
      <li
        v-for="page in pagesToShow"
        :key="page"
        :class="{ active: page === currentPage }"
      >
        <a @click="changePage(page)">{{ page }}</a>
      </li>
      <li v-if="endPage < totalPages">
        <span>...</span>
        <a @click="changePage(totalPages)">{{ totalPages }}</a>
      </li>
      <li :class="{ disabled: currentPage === totalPages }">
        <a @click="changePage(currentPage + 1)">»</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      return Math.max(this.currentPage - 4, 1);
    },
    endPage() {
      return Math.min(this.currentPage + 4, this.totalPages);
    },
    pagesToShow() {
      const pages = [];
      for (let i = this.startPage; i <= this.endPage; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.$emit("page-changed", page);
      }
    },
  },
};
</script>

<style scoped>
.pagination {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}
.pagination li {
  margin: 0 2px;
}
.pagination li a {
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid #6f3aff;
  border-radius: 3px;
  color: #333;
  cursor: pointer;
}
.pagination li.active a {
  background-color: #6f3aff;
  color: #fff;
}
.pagination li.disabled a {
  pointer-events: none;
  color: #ddd;
}
</style>
