<template>
  <div class="filter">
    <div class="filter__item">
      <label for="category">Категории: </label>
      <multiselect
        id="category"
        v-model="categoryValue"
        :options="categoryOptions"
        :multiple="true"
        :close-on-select="false"
        :clear-on-select="false"
        :preserve-search="true"
        placeholder="Выберите категории"
        label="name"
        track-by="name"
        class="filter__category"
      />
    </div>
    <div class="filter__item">
      <label for="brands">Бренды: </label>
      <multiselect
        id="brands"
        v-model="brandValue"
        :options="brandOptions"
        :multiple="true"
        :close-on-select="false"
        :clear-on-select="false"
        :preserve-search="true"
        placeholder="Выберите бренды"
        label="name"
        track-by="name"
        class="filter__brand"
      />
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Multiselect
  },
  data () {
    return {
      categoryValue: '',
      brandValue: '',
      categoryOptions: [
        { name: 'Phone' },
        { name: 'Tablet' },
        { name: 'Notebook' }
      ],
      brandOptions: [
        { name: 'Apple' },
        { name: 'Samsung' },
        { name: 'Xiaomi' },
        { name: 'Oppo' }
      ]
    }
  }
}
</script>

<style lang="scss">
.filter {
  display: flex;
  height: 51px;
  .multiselect {
    @include vue-multiselect;
    width: 100%;
  }
  &__item {
    display: flex;
    align-items: flex-start;
    flex-basis: 400px;
    label {
      margin-right: 10px;
      margin-top: 8px;
    }
    &:first-child {
      margin-right: 20px;
    }
  }
}
</style>
