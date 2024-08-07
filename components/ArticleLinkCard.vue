<template>
  <div class="card">
    <details :open="isOpen">
      <summary class="category">目錄</summary>
      <div class="title">
        <a href="#" @click="scrollToElement('h1', 0)">{{ h1Contents[0] }}</a>
      </div>

      <ul class="subtitle">
        <li v-for="(title, index) in h2Contents" :key="index">
          <a href="#" @click="scrollToElement('h2', index)">{{ title }}</a>
        </li>
      </ul>
    </details>
  </div>
</template>

<script setup>
import { reactive, onMounted, watch} from 'vue';
import { useArticleLinkStore } from '~/store/articleLink'
const h1Contents = reactive([])
const h2Contents = reactive([])
const isOpen = ref(false);
const articleLinkStore = useArticleLinkStore()

watch(() => articleLinkStore.title, (newValue) => {
  if (newValue) { 
    h1Contents.splice(0, h1Contents.length);
    h2Contents.splice(0, h2Contents.length);
    setTimeout(handle, 300);
  }
});

const checkMediaQuery = () => {
  if (window.matchMedia('(max-width: 600px)').matches) {
    isOpen.value = false;
  }  else {
    isOpen.value = true;
  }
};

onMounted(() => {
  setTimeout(handle, 300);
  checkMediaQuery();
  window.addEventListener('resize', checkMediaQuery);
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMediaQuery);
})

const handle = () => { 
  const articleElement = document.querySelector('.article');

  const h1 = Array.from(articleElement.querySelectorAll('h1')).map(h1 => h1.textContent)
  const h2 = Array.from(articleElement.querySelectorAll('h2')).map(h2 => h2.textContent)

  h1Contents.splice(0, h1Contents.length, ...h1)
  h2Contents.splice(0, h2Contents.length, ...h2)
}
  
const scrollToElement = (tag, index) => {
  const element = document.querySelector(`.article ${tag}:nth-of-type(${index + 1})`)
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
ul {
  padding: 0px;
  margin: 0px;
}

ul li {
  text-decoration: none;
  list-style-type: none;
  position: relative;
  margin-bottom: 2px;
}

a {
  text-decoration: none;
  list-style-type: none;
}

.card {
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
  padding:  20px;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%);
  position: relative;
}

.category {
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 10px;
}

.title {
  font-size: 1rem;
  margin-bottom: 8px;
}

.subtitle {
  margin-left: 15px;
  font-size: 1rem;
  position: relative;
}

.subtitle li::before {
  content: '#';
  position: absolute;
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  color: #0056b3;
}

a:visited {
  color: #0056b3;
}
</style>