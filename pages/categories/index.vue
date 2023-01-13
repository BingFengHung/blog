<template>
  <div class="container">
    <div>分類</div>
    <div>
      <ul>
        <li>
          <div>Node.js</div>
          <div class="count">10</div>
        </li>
        <li>
          <div>C#</div>
          <div class="count">10</div>
        </li>
        <li>
          <div>WPF</div>
          <div class="count">10</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
}
ul {
  padding: 2px 15px;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
}

li:hover {
  background-color: #ccc;
}

.count {
  background-color: #eee;
  border-radius: 5px;
  padding: 5px;
}
</style>