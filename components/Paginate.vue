<template>
  <vue-awesome-paginate
    v-model="currentPage"
    :total-items="items"
    :items-per-page="6"
    :max-pages-shown="3"
    :show-breapoint-buttons="false"
    :show-jump-buttons="false"
    :on-click="onClickHandler"> 
  <template #prev-button>
    <span>
      <svg xmlns="http://www.w3.org/2000/svg"
          fill="black"
          width="8"
          height="8"
          viewBox="0 0 24 24" >
        <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
      </svg>
    </span>
  </template>

  <template #next-button>
    <span>
      <svg xmlns="http://www.w3.org/2000/svg"
          fill="black"
          width="8"
          height="8"
          viewBox="0 0 24 24" >
        <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
      </svg>
    </span>
  </template>
  </vue-awesome-paginate>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps(['items'])
  const emit = defineEmits(['changePage'])
  const currentPage = ref(1)

  const onClickHandler = (page) => {
    emit('changePage', page);
  }
</script>

<style>
/* .pagination { 
  display: flex;
  justify-content: center;
} */
  
/* .pagination {
  display: flex;
  justify-content: center;
} */
  /* .pagination-container {
    display: flex;
    column-gap: 8px;
  } */
  /* .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  } */

.pagination-container {
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 10px 0px;
}
.paginate-buttons {
  width: 40px;
  height: 40px;
  margin-inline: 5px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  border-radius: 2px;
}
.back-button {
  width: 50px;
}
.next-button {
  width: 50px;
}

.back-button svg {
  transform: rotate(180deg);
}
.active-page {
  background-color: #2980b9;
  color: #fff;
}

.paginate-buttons:hover {
  background-color: #e5e5e5;
}

.active-page:hover {
  background-color: #3b8cc3;
  color: #fff;
}

.back-button:active,
.next-button:active {
  background-color: #dedede;
}

@media screen and (max-device-width: 480px) {
  /* 如果使用者之裝置寬度 <= 480px，將會再載入這裡的 CSS。 */
  .paginate-buttons {
    width: 30px;
  }
  
  .pagination-container {
    margin-bottom: 50px;
  }
}
</style>