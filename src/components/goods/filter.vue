<template>
  <div class="filter">
    <div class="filter__item">
      <label for="category">Категории: </label>
      <multiselect
        id="category"
        v-model="categoryLocalValue"
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
        v-model="brandLocalValue"
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
      ],
      categoryLocalValue: [],
      brandLocalValue: []
    }
  },
  computed: {
    /**
     * Result of filtration as a path to which we need to redirect
     * after select some values
     * @returns {string}
     */
    pathToRedirectByQuery () {
      let result = ''
      const categoryQuery = this.getCategoryPath()
      const brandQuery = this.getBrandPath()
      if (!categoryQuery && !brandQuery) { return result }
      return (categoryQuery + brandQuery).replace('&', '?')
    }
  },
  methods: {
    /**
     * Get some query from route.query object
     * @returns {object}
     */
    getQueryByRoute (property) {
      let result = []
      const query = this.$route.query[property]
      if (Array.isArray(query)) {
        query.forEach((element) => {
          result.push({ name: element })
        })
      } else {
        result.push({ name: query })
      }
      return result
    },
    /**
     * Iterate category values to get path string
     * @returns {string}
     */
    getCategoryPath () {
      let result = ''
      this.categoryLocalValue.forEach((element) => {
        result = `${result}&category=${element.name}`
      })
      return result
    },
    /**
     * Iterate brand values to get path string
     * @returns {string}
     */
    getBrandPath () {
      let result = ''
      this.brandLocalValue.forEach((element) => {
        result = `${result}&brand=${element.name}`
      })
      return result
    },
    /**
     * Set categoryLocalValue by current $route.query
     * @returns void
     */
    setCategoryLocalValue () {
      const category = this.getQueryByRoute('category')
      if (!category || !category[0].name) { return }
      this.categoryLocalValue = category
    },
    /**
     * Set brandLocalValue by current $route.query
     * @returns void
     */
    setBrandLocalValue () {
      const brand = this.getQueryByRoute('brand')
      if (!brand || !brand[0].name) { return }
      this.brandLocalValue = brand
    }
  },
  watch: {
    pathToRedirectByQuery (newValue) {
      this.$emit('select', newValue)
    }
  },
  mounted () {
    this.setCategoryLocalValue()
    this.setBrandLocalValue()
  }
}
</script>

<style lang="scss">
.filter {
  display: flex;
  justify-content: center;
  height: 51px;
  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
    font-size: 14px;
    height: 80px;
  }
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
      @media screen and (max-width: 991px) {
        display: none;
      }
    }
    &:first-child {
      margin-right: 20px;
      @media screen and (max-width: 991px) {
        margin-right: 0;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
