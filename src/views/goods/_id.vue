<template>
  <div class="goods-item">
    <a href="javascript:void(0);" class="goods-item__back" @click="back">Назад</a>
    <div v-if="hasData" class="goods-item__element">
      <div class="goods-item__name">{{ data.name }}</div>
      <div class="goods-item__category">{{ data.category }}</div>
      <div class="goods-item__brand">{{ data.brand }}</div>
    </div>
    <div class="goods-item__message-empty" v-else>Товар не найден</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      data: 'goods/detail/data'
    })
  },
  methods: {
    ...mapActions({
      getData: 'goods/detail/get'
    }),
    back () {
      this.$router.go(-1)
    }
  },
  data () {
    return {
      hasData: true
    }
  },
  async mounted () {
    await this.getData(this.$route.params.id)
    if (!this.data || this.data.length === 0) {
      this.hasData = false
    }
  },
  watch: {
    async $route (newValue) {
      await this.getData(newValue.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-item {
  &__element {
    border: 1px solid #c4c4c4;
    text-align: center;
    min-width: 150px;
    max-width: 300px;
    margin: 60px auto;
    padding: 20px;
    border-radius: 3px;
    font-size: 18px;
  }
  &__name {
    text-align: center;
  }
  div {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__back {
    margin-top: 30px;
    display: inline-block;
    display: inline-block;
    border: 1px solid #e8e8e8;
    padding: 9px 18px;
    border-radius: 3px;
    text-align: center;
    font-size: 14px;
    transition: background .1s;
    color: #2c3e50;
    &:hover {
      background: rgb(248, 248, 248);
    }
    @media screen and (max-width: 991px) {
      font-size: 12px;
      padding: 6px 12px;
    }
  }
  &__message-empty {
    text-align: center;
    margin-top: 30px;
  }
}
</style>
