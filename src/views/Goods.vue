<template>
  <div class="goods">
    <h1>Список товаров</h1>
    <goods-filter class="goods__filter" @select="redirect" />
    <goods-list :data="goods" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GoodsList from '@/components/goods/list'
import GoodsFilter from '@/components/goods/filter'

export default {
  components: {
    GoodsList,
    GoodsFilter
  },
  computed: {
    ...mapGetters({
      goods: 'goods/list/data'
    }),
    query () {
      const path = this.$route.path
      return this.$route.fullPath.replace(path, '')
    }
  },
  methods: {
    ...mapActions({
      getGoods: 'goods/list/get'
    }),
    redirect (query) {
      this.$router.push(`/goods${query}`)
    }
  },
  async mounted () {
    await this.getGoods(this.query)
  },
  watch: {
    async query (newValue) {
      await this.getGoods(newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.goods {
  &__filter {
    max-width: 800px;
  }
}
</style>
