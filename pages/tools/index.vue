<template>
  <div v-for="(tool, idx) in toolData" :key="tool.title">
  {{ tool.title }} - {{ tool.link }}
  </div>
</template>

<script setup lang="ts">
import { useToolsStore } from '../../store/tools'
const { toolData } = useToolsStore()


</script>

<style scoped>

</style>