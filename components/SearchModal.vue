<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="searchbox">
        <input v-model="searchText" @keyup.enter="onSearch" class="searchbox__input" type="text" placeholder="請輸入關鍵字">
        <button class="searchbox__close-btn" @click="modalClose">x</button>
      </div>

      <h6 v-show="searchResult.length == 0">No Data</h6>

      <div class="search-result">
        <template v-for="(result, idx) in searchResult" :key="result.title">
          <div @click="$emit('modal-close')">
            <NuxtLink :to="`/articles/${result.group}_${result.fake_title}`">{{ result.title }}</NuxtLink>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
const searchText = ref('')
let searchResult = reactive([])
const emit = defineEmits(['modal-close'])

let searchData = {}
onMounted(() => {
  nextTick(async () => {
    const { data } = await useFetch('https://bingfenghung.github.io/DevArticles/articles.json')

    data.value = Object.keys(data.value).reduce(((pre, cur) => {
      const dataSet = data.value[cur] = data.value[cur].map(el => { 
        el.link = el.link.replaceAll('#', '%23').replaceAll(' ', '%20').replaceAll('+', '%2B')
        el.fake_title = el.title.replaceAll('#', '%23').replaceAll(' ', '%20').replaceAll('+', '%2B')
        return {...el}
      })

      return ({[cur]: dataSet, ...pre})
    }), {})

    data.value = Object.keys(data.value).reduce((pre, cur) => {
      const datas = data.value[cur].map(el => {
        if (cur === 'C#') cur = 'CSharp'
        if (cur === 'Visual C++') cur = 'VCpp'
        return ({"group": cur, ...el})
      }) 
      return pre.concat(datas)
    }, [])


    searchData = data.value
  })
})

const onSearch = () => {
  const targetText = searchText.value

  const result = searchData.filter(el => {
    return el.title.includes(targetText)
  })

  // searchResult = []
  while(searchResult.length != 0) searchResult.pop()

  result.forEach(el => searchResult.push(el))
  // emit('modal-close')
}

const modalClose = () => {
  emit('modal-close')
  searchText.value = ''
  while(searchResult.length != 0) searchResult.pop()
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
  padding: 0px 0;
  border-radius: 5px;
  z-index: 1;
  overflow: hidden;
  background-color: #eee;
}

.modal-overlay {
  z-index: 1;
}
.searchbox {
  display: flex;
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
}

.searchbox__close-btn {
  outline: none;
  border: none;
  padding: 0.5rem 0.75rem;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: white;
  font-weight: 700;
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
    width: 300px;
    height: 300px;
  }
}

</style>