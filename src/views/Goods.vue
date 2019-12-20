<template>
  <div class="goods">
    <h1>Список товаров</h1>
    <goods-filter class="goods__filter" />
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
  data () {
    return {
      availableQueryList: ['category', 'brand'],
      queryNumber: 0
    }
  },
  computed: {
    ...mapGetters({
      goods: 'goods/list/data'
    }),
    query () {
      return this.getGoodsQuery()
    }
  },
  methods: {
    ...mapActions({
      getGoods: 'goods/list/get'
    }),
    /**
     * Get query by current url.
     * It allows to make secure and based on availableQueryList property
     * request to server avoiding to make it with any query
     * @returns {string}
     */
    getGoodsQuery () {
      const routeQuery = this.$route.query
      let result = ''
      this.availableQueryList.forEach((queryParam) => {
        if (!routeQuery[queryParam]) { return }
        result = result + this.getQueryString(routeQuery, queryParam)
        this.queryNumber++
      })
      return result
    },
    /**
     * Get stringified query
     * @param {object} routeQuery
     * @param {string} queryParam
     * @returns {string}
     */
    getQueryString (routeQuery, queryParam) {
      let result = ''
      let query = ''
      const queryValue = routeQuery[queryParam]
      if (Array.isArray(queryValue)) {
        query = this.getQueryWithMultipleParams(queryValue, queryParam)
      } else {
        query = `${queryParam}=${queryValue}`
      }

      if (this.queryNumber === 0) {
        result = `?${query}`
      } else {
        result = `${result}&${query}`
      }
      return result
    },
    /**
     * Get query with multiple params of some category
     * @param {object} routeQuery
     * @param {string} queryParam
     * @returns {string}
     */
    getQueryWithMultipleParams (queryValue, queryParam) {
      let query = ''
      queryValue.forEach((element) => {
        query = query ? `${query}&` : ''
        query = `${query}${queryParam}=${element}`
      })
      return query
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
