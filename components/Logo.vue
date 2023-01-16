<template>
  <div class="container">
    <div class="primary">
      <span class="special">J</span>
      <p>oe</p>
    </div>
    <div class="secondary">DevBlog</div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
div {
  color: #1b9fda;
  font-size: 1rem;
}

.primary {
  display: flex;
  position: relative;
  z-index: 1;
  align-items: center;
  font-size: 1.5rem;
}

.primary p {
  margin: 0px;
}

.secondary {

}


.primary .special {
  font-size: 1.5rem;
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #1b9fda;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 30px;
}
</style>