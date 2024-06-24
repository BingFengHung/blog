<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="searchbox">
        <input id="inputText" v-model="searchText" @keyup.enter="onSearch" class="searchbox__input" type="text" placeholder="請輸入關鍵字">
        <button class="searchbox__close-btn" @click="modalClose">X</button>
      </div>

      <h6 v-show="searchResult.length == 0">No Data</h6>

      <div class="search-result">
        <template v-for="result in searchResult" :key="result.title">
          <div @click="jumpLink">
            <NuxtLink :to="`/articles/${result.group}<_>>${result.fake_title}`">{{ result.title }}</NuxtLink>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { useArticleStore } from '~~/store/articles'

const searchText = ref('')

let searchResult = reactive([])
const emit = defineEmits(['modal-close', 'jump-link'])
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false 
  }
})

let searchData = {}
const articleStore = useArticleStore()

watch(() => props.isVisible, (newValue) => {
  if (newValue) disableScroll();
  else enableScroll()
})

onMounted(async() => {
  if (!articleStore.isQueryData) await articleStore.fetchArticleData()     
  let data = articleStore.articleData

  data = Object.keys(data).reduce(((pre, cur) => {
    const dataSet = data[cur] = data[cur].map(el => {
      return { 
        ...el,
        link: el.link.replaceAll('#', '%23').replaceAll(' ', '%20').replaceAll('+', '%2B'), 
        fake_title: el.title.replaceAll('#', '%23').replaceAll(' ', '%20').replaceAll('+', '%2B'),
      }
    })

    return ({[cur]: dataSet, ...pre})
  }), {})

  data = Object.keys(data).reduce((pre, cur) => {
    const datas = data[cur].map(el => {
      // if (cur === 'C#') cur = 'CSharp'
      // if (cur === 'Visual C++') cur = 'VCpp'
      return ({"group": cur, ...el})
    }) 
    return pre.concat(datas)
  }, [])

  searchData = data
})

const onSearch = () => {
  const targetText = searchText.value

  const result = searchData.filter(el => {
    return el.title.includes(targetText)
  })
  

  while(searchResult.length != 0) searchResult.pop()

  result.forEach(el => searchResult.push(el))
}

const modalClose = () => {
  emit('modal-close')
  searchText.value = ''
  while(searchResult.length != 0) searchResult.pop()
}

const jumpLink = () => {
  emit('jump-link')
  searchText.value = ''
  while(searchResult.length != 0) searchResult.pop()
}

const enableScroll = () => {
  document.body.style.overflow = ''
}
const disableScroll = () => {
  document.body.style.overflow = 'hidden'
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 10px;
  border-radius: 5px;
  z-index: 1;
  overflow: hidden;
  background-color: #eee;
  border: 2px solid #007bff;
  box-shadow: 1px 1px 1px #007bff;
}

.modal-overlay {
  z-index: 1;
}

.searchbox {
  display: flex;
  position: relative;
  border: 1px solid #007bff;
  border-radius: 5px;
  overflow: hidden;
}

.searchbox__input {
  flex-grow: 1;
  box-sizing: border-box;
  background-color: #fff;
  padding: 1rem;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 0;
  font-size: 1.2rem;
}

.searchbox__close-btn {
  outline: none;
  border: none;
  padding: 0.5rem 0.75rem;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: white;
  font-weight: 700;
  color: black;
}

.searchbox__close-btn:active {
  background-color: #eee;
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 900;
  font-size: 1.2rem;
  margin: 20px 0;
  color: red;
}

.search-result {
  overflow: auto;
  height: 450px;
}

.search-result div {
  display: flex;
  position: relative;
  margin-top: 3px;
  margin-left: 10px;
  margin-bottom: 15px;
}

.search-result div::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  background-color: #ccc;
  height: 1px;
  width: 100%;
}

.search-result div:hover::after {
  background-color: #999;
}

.search-result a {
  text-decoration: none;
  text-align: left;
  display: inline-block;
  width: 100%;
  color: #007bff;
}

.search-result a:visited {
  color: #007bff;
}

@media screen and (min-width: 1024px) {
  /*STYLES*/
}

@media screen and (min-width: 1200px) {
  /* 如果使用者之視窗寬度 >= 1200px，將會再載入這裡的 CSS。 */
}

@media screen and (min-width: 768px) and (max-width: 979px) {
  /* 如果使用者之視窗寬度介於 768px ~ 979px，將會再載入這裡的 CSS。 */
}

@media screen and (max-width: 767px) {
  /* 如果使用者之視窗寬度 <= 768px，將會再載入這裡的 CSS。*/
}

@media screen and (max-device-width: 480px) {
  /* 如果使用者之裝置寬度 <= 480px，將會再載入這裡的 CSS。 */
  .modal {
    width: 320px;
    height: 350px;
  }
}
</style>