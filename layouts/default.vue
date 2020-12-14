<template>
  <div>
    <forelse-navbar />
    <div class="container">
      <Nuxt />
    </div>
    <footer>
      <img src="@/assets/logo.png" alt="">
    </footer>
  </div>
</template>

<style>
.container {
  margin: 0 2em;
}

footer {
  min-height: 15em;
  background-color: var(--font-color);
  color: #fff;
  display: flex;
  justify-content: space-around;
}
</style>
