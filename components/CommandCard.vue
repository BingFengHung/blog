<template>
  <div class="card">
    <!-- {{ commandData }} -->
    <div class="title">
      <div class="title_subject">{{ commandData.title }}</div>
      <div class="title_tag">{{ group }}</div>
    </div>

    <div v-html="command"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import marked from '../utils/markedSetup'

const command = ref('')
const { group, commandData } = defineProps(['group', 'commandData'])
const baseUrl = `https://bingfenghung.github.io/DevArticles/Tools`

onMounted(async () => {
  const data: any = await useFetch(`${baseUrl}/${group}/${commandData.link}`)
  const value = data.data;
  command.value = marked.marked(value.value.toString())
})

</script>

<style>
.hljs {
  white-space: pre-wrap;
}
</style>

<style scoped>
.card {
  border-radius: 5px;
  background-color: white;
  margin-bottom: 10px;
  padding: 5px 20px;
  box-sizing: border-box;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%);
}

.title  {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
}

.title_subject {
  font-size: 1.4rem;
}

.title_tag {
  font-size: 1rem;
  border-radius: 5px;
  background-color: #1b9fda;
  color: white;
  padding: 5px;
}
</style>