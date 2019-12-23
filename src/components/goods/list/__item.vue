<template>
  <div class="item">
    <router-link :to="`/goods/${id}`" class="item__name">{{ name }}</router-link>
    <div class="item__category">{{ category }}</div>
    <div class="item__brand">{{ brand }}</div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    },
    brand: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.item {
  min-width: 150px;
  padding: 20px;
  border: 1px solid rgb(196, 196, 196);
  border-radius: 3px;
  text-align: center;
  & > div, a {
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__name {
    display: block;
  }
}
</style>
