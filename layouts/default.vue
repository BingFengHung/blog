<template>
  <div class="container">
    <header>
      <div class="header_container">
          <NuxtLink to="/">
            <div class="logo">
              <Logo></Logo>
            </div>
          </NuxtLink>
        <div class="menu-icon">
          <input id="menu" name="menu" class="menu_check" type="checkbox">
          <label for="menu">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </label>
        </div>
      </div>

      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/archives">Archives</NuxtLink></li>
        <li><NuxtLink to="/categories">Categories</NuxtLink></li>
        <li><NuxtLink to="/tools">Tools</NuxtLink></li>
        <li>
          <Button class="search-btn" @click="showModal=true">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </Button>
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
    <SearchModal v-show="showModal" @modal-close="showModal=false"></SearchModal>
  </div>
  <div>
    <GoToTop/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showModal = ref(false)
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
  margin-bottom: 20px;
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

.side-right {
  /* display: flex;
  flex-direction: column;
  gap: 10px; */
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
}

.menu-icon {
  display: none;
  margin: 3px 5px;
  padding: 3px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, .1);
}

.bar1, .bar2, .bar3 {
  width: 30px;
  height: 2px;
  background-color: #ccc;
  margin: 5px 0;
  transition: .4s;
}

.search-btn {
  outline: none;
  background-color: white;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
}

a.router-link-active {
  font-weight: bold;
  color: #1b9fda;
}

@media screen and (min-width: 1024px) {
  main {
    width: 960px;
  }

  .side {
    width: 30%;
  }

  .content {
    width: 70%;
  }
}

@media screen and (min-width: 1200px) {
  /* 如果使用者之視窗寬度 >= 1200px，將會再載入這裡的 CSS。 */
  main {
    width: 1200px;
  }

  .side {
    width: 30%;
  }

  .content {
    width: 70%;
  }
}

@media screen and (min-width: 768px) and (max-width: 979px) {
  /* 如果使用者之視窗寬度介於 768px ~ 979px，將會再載入這裡的 CSS。 */
  main {
    width: 100%;
  }

  .side {
    width: 30%;
  }

  .content {
    width: 70%;
  }
}

@media screen and (max-width: 767px) {
  /* 如果使用者之視窗寬度 <= 768px，將會再載入這裡的 CSS。*/
  main {
    width: 100%;
    /* display: flex; */
    display: grid;
    grid-template-columns: 30% 68%;
    gap: 10px;
  }

  .side {
    /* width: 30%;
    display: flex;
    order: 1; */
    grid-column:  1 / 2;;
  }

  .content {
    /* width: 70%;
    display: flex;
    order: 2; */
    grid-column: 2 / 3;
  }
  
  .side-right {
    /* width: 100%;
    order: 3; */
    grid-column: 2 / 3;;
  }
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

  header ul {
    display: none;
    height: 140px;
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
}
</style>