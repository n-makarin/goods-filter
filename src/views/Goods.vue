<template>
  <div class="goods">
    <h1>Список товаров</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
  },
  computed: {
    ...mapGetters({
      goods: 'goods/list/data'
    })
  },
  methods: {
    ...mapActions({
      getGoods: 'goods/list/get'
    })
  },
  async mounted () {
    await this.getGoods()
  }
}
</script>

<style lang="stylus" scoped>
</style>
