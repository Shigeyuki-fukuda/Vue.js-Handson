<template lang="html">
  <div>
    <el-table :data="tickets">
      <el-table-column prop="name" label="チケット名" width="180px" />
      <el-table-column prop="due" label="期限日" width="180px" />
      <el-table-column prop="description" label="説明文" />
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['tickets'])
  }
}
</script>

<style scoped>
</style>
