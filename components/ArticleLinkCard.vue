<template>
  <div>{{ h1Content }}</div>
  <ul>
    <li v-for="(title, index) in h2Content" :key="index">
      <a href="#" @click="scrollToElement('h2', index)">{{ title }}</a>
    </li>
  </ul>
</template>

<script setup>
import {  reactive, onMounted } from 'vue';
const h1Content = reactive([])
const h2Content = reactive([])

onMounted(() => {
  nextTick(() => {
    const articleElement = document.querySelector('.article');
    const h1 = Array.from(articleElement.querySelectorAll('h1')).map(h1 => h1.textContent)
    const h2 = Array.from(articleElement.querySelectorAll('h2')).map(h2 => h2.textContent)
  
    h1Content.splice(0, h1Content.length, ...h1)
    h2Content.splice(0, h2Content.length, ...h2)
  })
})
  
const scrollToElement = (tag, index) => {
  const element = document.querySelector(`.article ${tag}:nth-of-type(${index + 1})`)
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

</script>

<style scoped>
</style>