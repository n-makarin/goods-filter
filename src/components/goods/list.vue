<template>
  <div class="list">
    <item
      v-for="item in data"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :category="item.category"
      :brand="item.brand"
      class="list__item"
    />
  </div>
</template>

<script>
import Item from '@/components/goods/list/__item'

export default {
  components: {
    Item
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &__item {
    width: 20%;
    margin: 20px;
  }
}
</style>
