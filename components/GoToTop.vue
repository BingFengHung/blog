<template>
  <button v-show="isVisible" @click="scrollToTop" class="back-to-top">
    ⬆️ 回到最上面
  </button>  
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const isVisible = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const checkScroll = () => {
  isVisible.value = window.scrollY > 200;
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkScroll);
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s;
}

.back-to-top:hover {
  background-color: #0056b3;
}
</style>