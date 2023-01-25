<template>
  <div class="container">
    <div v-for="(tool, key) of toolData" :key="key">
      <div class="title">
        <NuxtLink :to="`/tools/${tool.url}`">{{ tool.title }}</NuxtLink>
      </div>
    </div>
  </div> 
</template>

<script setup lang="ts">
import { useToolsStore } from '../../store/tools'
const { toolData } = useToolsStore()

</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%)
}

.title {
  display: inline-block;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background-color: #1b9fda;
  padding: 5px 10px;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 10px;
}

.title a {
  text-decoration: none;
  all: unset;
  cursor: pointer;
}

.link {
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.link a {
  text-decoration: none;
  font-size: 1rem;
}
</style>