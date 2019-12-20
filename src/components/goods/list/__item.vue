<template>
  <div class="item">
    <div class="item__name">{{ name }}</div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid rgb(196, 196, 196);
  border-radius: 3px;
  & > div {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
