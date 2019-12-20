<template>
  <div class="goods">
    <h1>Список товаров</h1>
    <goods-list :data="goods" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GoodsList from '@/components/goods/list'

export default {
  components: {
    GoodsList
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
