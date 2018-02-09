<template>
  <div id="app">
    <ul class="navigation">
      <li><router-link to="/">ホーム</router-link></li>
      <li><router-link to="/tickets">チケット一覧</router-link></li>
      <li><router-link to="/tickets/create">チケット新規作成</router-link></li>
    </ul>
    <h2>{{ $route.name }}</h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navigation {
  display: flex;
}

.navigation li {
  margin-right: 30px;
}
</style>
