<template lang="html">
  <el-container id="container">
    <el-aside style="background-color: rgb(238, 241, 246)">
      <el-menu :router="true" >
       <el-menu-item index="/home">ホーム</el-menu-item>
        <el-menu-item index="/tickets">チケット一覧</el-menu-item>
        <el-menu-item index="/tickets/create">チケット新規作成</el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span>{{ $route.name }}</span>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  mounted () {
    if (!this.isLoggedIn) {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
}
</script>

<style scoped>
#container {
  width: 100%;
  height: 100vh;
  overflow: auto;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-menu-item.is-active {
  background: #ecf5ff;
}

</style>