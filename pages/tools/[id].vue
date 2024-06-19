<template>
  <div>
    <div v-for="(command, idx) in toolData" :key="command">
      <CommandCard :group="link" :commandData="command"></CommandCard> 
    </div>
    <!-- {{ toolData }} -->
  </div>
</template>

<script setup lang="ts">
import { useSpecificToolStore } from '../../store/specificTool';
import { onMounted } from 'vue';
let { id: link }  = useRoute().params

let { toolData, fetchData } = useSpecificToolStore()

while(toolData.length != 0)
  toolData.pop()


const updateToolDate = async () => {
  const data = await fetchData(link.toString())
}

updateToolDate()
</script>

<style scoped>

</style>