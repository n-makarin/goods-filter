<template>
  <div class="filter">
    <multiselect
      v-model="categoryValue"
      :options="categoryOptions"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      placeholder="Pick category"
      label="name"
      track-by="name"
      class="filter__category"
    />
    <multiselect
      v-model="brandValue"
      :options="brandOptions"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      placeholder="Pick brand"
      label="name"
      track-by="name"
      class="filter__brand"
    />
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
  .multiselect {
    @include vue-multiselect;
    &:first-child {
      margin-right: 20px;
    }
  }
}
</style>
