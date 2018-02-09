<template lang="html">
  <div class="">
    <form @submit.prevent="onSubmit">
      <p>
        <label>
          チケット名：
          <input v-model="formData.name">
        </label>
      </p>
      <p>
        <label>
          期限日：
          <input type="date" v-model="formData.due">
        </label>
      </p>
      <p>
        <label>
          説明文：
          <textarea v-model="formData.description" />
        </label>
      </p>
      <p>
        <button>登録</button>
      </p>
    </form>
  </div>
</template>

<script>
import uuid from 'uuid/v4'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      formData: {
        name: '',
        due: '',
        description: ''
      }
    }
  },
  methods: {
    onSubmit () {
      const payload = {...this.formData}
      payload.id = uuid()
      this.createTicket({ payload })
      this.$router.push('/tickets/')
    },
    ...mapActions(['createTicket'])
  }
}
</script>

<style scoped>
</style>
