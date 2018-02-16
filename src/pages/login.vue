<template lang="html">
    <el-container id="container">
        <el-main>
            <el-card class="card">
        <div slot="header" class="card-header">
          <span>Admin</span>
        </div>
        <el-form label-width="120px"  @submit.prevent="onSubmit" v-loading="isLoading">
          <el-form-item class="form-item" label="User ID">
            <el-input v-model="formData.id" />
          </el-form-item>
          <el-form-item class="form-item" label="Password">
            <el-input v-model="formData.password" type="password" />
          </el-form-item>
          <p class="text-center">
            <el-button type="button" @click="onSubmit">ログイン</el-button>
          </p>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import delay from 'delay'
import { mapActions } from 'vuex'
  export default {
    data () {
    return {
      formData: {
        id: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
     async onSubmit () {
      this.isLoading = true
      await delay(2000)
      this.doLogin()
      this.$router.push('/home')
    },
    ...mapActions(['doLogin'])
  }
}
</script>

<style scoped>
#container {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: #ecf5ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  max-width: 400px;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}
</style>

<style>
#container .el-form-item__label {
  text-align: left;
}
</style>