<template>
  <div class="container">
    <header>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/archives">Archives</NuxtLink></li>
        <li><NuxtLink to="/categories">Categories</NuxtLink></li>
        <li>
          <div>
            <input type="text">
            <Button>Search</Button>
          </div>
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
    </main>
  </div>
</template>

<script setup>

</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  background-color: #f7f7f7;
}
</style>

<style scoped>
.container {
  margin: 0px;
  padding: 0px;
}

.content {
  width:  100%;
}

header {
  margin-bottom: 20px;
  background-color: white;
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
  background-color: white;
  margin: 0px;
  height: 100px;
}

li {
  margin: 10px;
  list-style-type: none;
}
</style>