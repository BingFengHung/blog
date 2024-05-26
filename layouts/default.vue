<template>
  <div class="container">
    <header>
      <div class="header_container">
          <NuxtLink to="/">
            <div class="logo">
              <Logo></Logo>
            </div>
          </NuxtLink>
          <div class="menus">
            <button class="search-btn" @click="showModal=true">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
            <div class="menu-icon">
              <input ref="menuBox" id="menu" name="menu" class="menu_check" type="checkbox">
              <label for="menu">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
              </label>
            </div>
          </div>
      </div>

      <ul>
        <li><NuxtLink to="/" @click="refreshPaginateIndex">首頁</NuxtLink></li>
        <li><NuxtLink to="/archives" @click="refreshPaginateIndex">文章歸檔</NuxtLink></li>
        <li><NuxtLink to="/categories" @click="refreshPaginateIndex">分類目錄</NuxtLink></li>
        <li><NuxtLink to="/tools" @click="refreshPaginateIndex">開發工具</NuxtLink></li>

        <li>
          <button class="search-btn" @click="showModal=true">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
        </li>
      </ul>
    </header>

    <main>
      <div class="side">
        <Profile></Profile>
        <CategoriesCard></CategoriesCard>
      </div>
      <div class="content">
        <slot></slot>
      </div>
      <div class="side-right">
        <RecentArticle></RecentArticle>
      </div>
    </main>
    <SearchModal v-show="showModal" @modal-close="showModal=false" @jump-link="searchJumpLink"></SearchModal>
  </div>
  <div>
    <GoToTop/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCurrentPageStore } from '../store/currentPage'

const menuBox = ref(null)
const showModal = ref(false)

const currentPageStore = useCurrentPageStore()

const searchJumpLink = () => {
  showModal.value = false;
  menuBox.value.checked = false
}

const refreshPaginateIndex = () => currentPageStore.setData(1)
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  background-color: #f7f7f7;
}
</style>

<style scoped>
.logo {
  display: inline-block;
  margin: 10px 20px;
}

.container {
  margin: 0px;
  padding: 0px;
}

.content {
  width:  100%;
}

header {
  display: flex;
  margin-bottom: 10px;
  background-color: white;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%);
  align-items: center;
}

main {
  display: flex;
  gap: 10px;
  width: 960px;
  margin: 0 auto;
}

.side {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

header ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px;
  height: 100px;
}

li {
  margin: 10px;
  list-style-type: none;
}

li a {
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  font-size: 1.2rem
}

ul li {
  position: relative;
}

ul li::after {
  content: '';
  width: 0px;
  height: 2px;
  position: absolute;
  bottom: -2px;
  left: 0px;
  transition: width 0.5s ease;
}

ul li:hover::after {
  content: '';
  width: 100%;
  height: 2px;
  position: absolute;
  background-color: #1b9fda;
  bottom: -2px;
  left: 0px;
}

.menus {
  display: none;
}

.menu-icon {
  display: none;
  margin: 3px 5px;
  padding: 3px;
  border: 2px solid rgb(27, 159, 218);
  border-radius: 5px;
  /* box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, .1); */
  box-shadow: 1px 2px 3px rgba(27, 159, 218, .3);
  transition: background-color 0.3s, transform 0.3s;
}

.bar1, .bar2, .bar3 {
  width: 30px;
  height: 1.8px;
  background-color: #1b9fda;
  margin: 5px 0;
  transition: .4s;
}

.search-btn {
  outline: none;
  background-color: white;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  color: black;
}

a.router-link-active {
  font-weight: bold;
  color: #1b9fda;
}


@media screen and (max-device-width: 480px) {
  main {
    display: flex;
    gap: 10px;
  }
  /* 如果使用者之裝置寬度 <= 480px，將會再載入這裡的 CSS。 */
  .side {
    display: none;
  }
  
  .side-right {
    display: none;
  }

  main {
    width: 100%;
  }

  .content {
    width: 100%;
  }
  
  header {
    padding-bottom: 5px;
  }

  header ul {
    display: none;
    height: auto;
  }

  .menus {
    display: flex;
  }

  .menus .search-btn {
    font-size: 1.3rem;
    color: #1b9fda;
    padding: 5px 10px; 
    margin-right: 5px;
  }

  ul .search-btn {
    display: none;
  }

  .menu-icon {
    display: inline-block;
  }

  .menu_check {
    display: none;
  }

  /* .menu-icon:has(> input[type=checkbox]:checked) + ul {
    display: block;
  } */

  .header_container:has(.menu-icon > input[type=checkbox]:checked) + ul {
    display: block;
  }

  header {
    display: block;
  }

  .header_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul li::after {
    content: '';
    width: 0px;
    height: 2px;
    position: absolute;
    bottom: -2px;
    left: 0px;
    transition: width 0.5s ease;
  }

  ul li:hover::after {
    width: 0%;
  }
}

@media screen and (min-width: 481px) {
  /* 如果使用者之視窗寬度 <= 768px，將會再載入這裡的 CSS。*/
 /*  main {
    width: 100%;
    display: flex;
    grid-template-columns: 30% 68%; 
    gap: 10px;
  }

  .side {
    grid-column:  1 / 2;
  }

  .content {
    grid-column: 2 / 3;
  }
  
  .side-right {
    grid-column: 2 / 3;
  } */
  main {
        display: grid;
        width: 100%;
        grid-template-columns: 30% 68%;
        grid-template-rows: auto 1fr;
        gap: 10px;
    }

    .side {
        grid-column: 1 / 2;
        grid-row: 1 / 3; /* 覆蓋第一和第二行 */
    }

    .content {
        grid-column: 2 / 3;
        grid-row: 1 / 2; /* 只佔第一行 */
    }
    
    .side-right {
        grid-column: 2 / 3;
        grid-row: 2 / 3; /* 佔第二行 */
    }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* 如果使用者之視窗寬度介於 768px ~ 1024px，將會再載入這裡的 CSS。 */
  main {
    width: 99%;
    display: grid;
    grid-template-columns: 30% 68%;
    gap: 10px;
    margin: 10px;
  }

  .side {
    grid-column:  1 / 2;;
  }

  .content {
    grid-column: 2 / 3;
  }
  
  .side-right {
    grid-column: 2 / 3;;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1199px) {
  main {
    display: flex;
    gap: 10px;
    width: 1020px;
    margin: 0 auto;
  }

  .side {
    width: calc(20% - 10px);
  }

  .content {
    width: calc(60% - 10px);
  }

  .side-right {
    width: calc(20% - 10px);
  }
}

@media screen and (min-width: 1200px) {
  /* 如果使用者之視窗寬度 >= 1200px，將會再載入這裡的 CSS。 */
  main {
  display: flex;
  gap: 10px;
  width: 1200px;
  margin: 0 auto;
  }

  .side {
    width: calc(18% - 10px);
  }

  .content {
    width: calc(60% - 10px);
  }

  .side-right {
    width: calc(22% - 10px);
  }
}
</style>