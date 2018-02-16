<template lang="html">
  <div>
    <el-form @submit.prevent="onSubmit" label-width="120px" v-loading="isLoading">
      <el-form-item label="チケット名">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="期限日">
        <el-date-picker value-format="yyyy/MM/dd" v-model="formData.due" style="width: 100%;" />
      </el-form-item>
      <el-form-item label="説明文">
        <el-input type="textarea" v-model="formData.description" />
      </el-form-item>
      <p style="text-align: right;">
        <el-button type="primary" @click="onSubmit">登録</el-button>
      </p>
    </el-form>
  </div>
</template>

<script>
import delay from 'delay'
import uuid from 'uuid/v4'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      formData: {
        name: '',
        due: '',
        description: ''
      },
      isLoading: false
    }
  },
  methods: {
    async onSubmit () {
      this.isLoading = true
      this.$notify({
        type:'success',
        title: '作成完了',
        message: 'チケット作成が完了しました'
      })
      await delay(2000)
      const payload = {...this.formData}
      payload.id = uuid()
      this.createTicket({ payload })
      this.isLoading = false
      this.$router.push('/tickets/')
    },
    ...mapActions(['createTicket'])
  }
}
</script>

<style scoped>
</style>
