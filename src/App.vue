<template>
  <div id="app">
    <div class="wrap">
      <header class="container">
        <div class="row">
          <img class="logo" src="./assets/nethernite.png" alt="Nethernite">
          <div class="col-12">
            <div class="pt-4">
              <Search />
            </div>
          </div>
        </div>
      </header>
      <main class="container">
        <div class="row">
          <div class="col-12">
            <PostsList :posts="POSTS" />
          </div>
        </div>
      </main>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div>
              <nav class="pt-4">
                <Paginate
                    v-model="page"
                    :page-count="NBPAGES"
                    :prev-text="'Back'"
                    :next-text="'Forward'"
                    :container-class="'pagination'"
                    :page-class="'page-item'"
                    :page-link-class="'page-link'"
                    :prev-class="'page-item'"
                    :prev-link-class="'page-link'"
                    :next-class="'page-item'"
                    :next-link-class="'page-link'"
                    :click-handler="pageChangeHandler"
                />
              </nav>
            </div>
          </div>
        </div>
      </div>
      <footer class="container">
        <div class="row">
          <div class="col-12">
            <MyFooter />
          </div>
        </div>
      </footer>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Modal v-if="SELECTED_POST" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search';
import PostsList from '@/components/PostsList';
import Modal from '@/components/Modal';
import MyFooter from '@/components/MyFooter'

import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'App',
  data: () => {
    return {
      page: 1
    };
  },
  components: {
    Search,
    Modal,
    PostsList,
    MyFooter,
  },
  computed: {
    ...mapGetters([
      'SEARCH_VAL',
      'POSTS',
      'NBPAGES',
      'SELECTED_POST',
    ]),
  },
  watch: {
    async SEARCH_VAL () {
      await this.FETCH_POSTS_FROM_API()
      this.POSTS.filter(item => item.name.includes(this.SEARCH_VAL.toLowerCase()));
    },
  },
  methods: {
    ...mapActions([
      'FETCH_POSTS_FROM_API'
    ]),
    ...mapMutations([
        'SET_SEARCH_VAL',
    ]),
    pageChangeHandler(currentPage = 1){
      this.FETCH_POSTS_FROM_API(currentPage)
    }
  },
  async mounted () {
    await this.FETCH_POSTS_FROM_API();
  },
};
</script>
