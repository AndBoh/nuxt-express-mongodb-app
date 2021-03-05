<template>
  <div class="container">
    Main Page
    {{ apiResponse }}
  </div>
</template>

<script>
export default {
  async asyncData (ctx) {
    const apiResponse = await ctx.$axios.$post('http://api', { test: 'param' });
    return { apiResponse }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
