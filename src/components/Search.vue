<template>
  <label>
    <input
        v-model="searchVal"
        class="search"
        placeholder="Search..."
        @input="search(searchVal)"
    />
  </label>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
  name: "Search",
  computed: {
    ...mapGetters([
        'SEARCH_VAL',
    ]),
    searchVal: {
      get() {
        return this.SEARCH_VAL
      },
      set(value) {
        this.SET_SEARCH_VAL(value)
      }
    }
  },
  methods: {
    ...mapMutations([
       'SET_SEARCH_VAL'
    ]),
    search(val) {
      this.SET_SEARCH_VAL(val)
    }
  }
}
</script>


<style lang="scss" scoped>
  label {
    width: 100%;
  }
  .search {
    width: 100%;
    height: 45px;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 14px;
    padding-left: 35px;
    line-height: 17px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    opacity: 0.6;
    background: url("../assets/search.svg") no-repeat 10px;
    &:focus, :active {
      outline: none;
      color: #000;
    }
  }
</style>
