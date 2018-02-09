<template lang="html">
  <div class="">
    <ul>
      <li v-for="ticket in tickets" :key="ticket.id">
        {{ticket.name}}: {{ticket.due}}<br>
        {{ticket.description}}
      </li>
    </ul>
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
