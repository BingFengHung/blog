<template>
  <div class="profile">
    <div class="avatar">
      <img src="https://github.com/bingfenghung.png" alt="">
    </div>
    <div class="bio">Bing Feng</div>
    <div>
      <ul class="menu">
        <li>
          <p>文章</p>
          <p>{{ articleCount }}</p>
        </li>

        <li>
          <p>類別</p>
          <p>{{ categoryCount }}</p>
        </li>

        <li>
          <p>標籤</p>
          <p>{{ tagCount }}</p>
        </li>
      </ul>
      <div class="links">
        <a href="https://github.com/BingFengHung">
          <font-awesome-icon icon="fa-brands fa-github" />
        </a>

        <a href="https://github.com/BingFengHung/DevBlogs">
          <font-awesome-icon icon="fa-solid fa-blog" />
        </a>

        <a href="https://gist.github.com/BingFengHung">
          <font-awesome-icon icon="fa-solid fa-code" />
        </a>
      </div>
    </div>
    <a href="https://github.com/BingFengHung"></a>
  </div>
</template>

<script setup>
import { ref , onMounted} from 'vue'
const articleCount = ref(0)
const categoryCount = ref(0)
const tagCount = ref(0)

onMounted(async () => {
  nextTick(async () => {
    const { data } = await useFetch('https://bingfenghung.github.io/DevArticles/articles.json')
    articleCount.value = Object.keys(data.value).reduce((pre, cur) => {
      return data.value[cur].length + pre
    }, 0)

    categoryCount.value = Object.keys(data.value).map(el => el).length

    const tags = Object.keys(data.value).reduce((pre, cur) => {
      const current = data.value[cur].reduce((pre, cur) => {
        const obj = cur.tags.reduce((pre, cur) => {
          let obj = { [cur]: 0 }
          return {...obj, ...pre}
        }, {})

        return {...obj, ...pre}
      }, {})
      return {...current, ...pre}
    }, {})

    tagCount.value = Object.keys(tags).length

  })
})
</script>

<style scoped>
.profile {
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  background-color: white;
  padding: 10px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%), 0 0 1px rgb(0 0 0 / 10%)
}

.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  border-radius: 50%;
  width: 50%;
  height: 50%;
}

.bio {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 10px;
  font-weight: 600;
}

.links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.links a {
  color: black;
}

.menu {
  display: flex;
  justify-content: space-between;
}

ul.menu {
  padding: 0px;
  margin: 5px 15px 5px;
}

.menu li {
  list-style-type: none;
  text-align: center;
}

.menu li p:nth-child(1) {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>