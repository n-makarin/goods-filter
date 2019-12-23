<template>
  <div class="goods">
    <h1 class="goods__title">Список товаров</h1>
    <goods-filter class="goods__filter" @select="redirect" />
    <goods-list class="goods__list" :data="goods" />
    <div class="goods__message-empty" v-if="!goods || goods.length === 0">Товары не найдены</div>
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
      const targetPath = `/goods${query}`
      if (this.$route.fullPath === targetPath) { return }
      this.$router.push(targetPath)
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
  &__title {
    text-align: center;
  }
  &__filter {
    max-width: 800px;
  }
}
</style>
