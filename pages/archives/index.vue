<template>
  <div class="container">
    <div>2022</div>
    <div class="timeline">
      <div class="article">
        <p>2022-08-17</p>
        <p>標題</p>
      </div>
      <div class="article">
        <p>2022-08-17</p>
        <p>標題</p>
      </div>
      <div class="article">
        <p>2022-08-17</p>
        <p>標題</p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  display: block;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
}
.timeline {
  border-left: 1px solid #ccc;
  margin-left: 20px;
}
.article {
  position: relative;
  padding-left: 20px;
}

.article::before {
  position: absolute;
  content: '';
  background-color: #ccc;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  left: -5px;
}

</style>