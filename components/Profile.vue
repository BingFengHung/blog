<template>
  <div class="profile">
    <div class="avatar">
      <img src="https://github.com/bingfenghung.png" alt="">
    </div>
    <div>Bing Feng</div>
    <div>
      <ul>
        <li>
          <p>文章</p>
          <p>100</p>
        </li>

        <li>
          <p>類別</p>
          <p>100</p>
        </li>

        <li>
          <p>標籤</p>
          <p>100</p>
        </li>
      </ul>
    </div>
    <a href="https://github.com/BingFengHung"></a>
  </div>
</template>

<script setup>

</script>

<style scoped>
.profile {
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  padding: 10px;
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
</style>