<template>
  <div>
    <ul v-for="(post, index) in posts" :key="index" class="list-group">
      <li class="list-group-item">
        <div>
          Name:
          <strong
            class="pointer"
            data-toggle="modal"
            data-target="#modal"
            @click="selectedPost(post)"
          >
            {{ post.name }}
          </strong>
        </div>
        <div class="d-flex">
          <span>description:</span>
          <span v-if="post.description" class="badge">
            {{ post.description }}
          </span>
          <span v-else> Dismiss</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "PostsList",
  props: {
    posts: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapMutations(["SET_SELECTED_POST"]),
    selectedPost(val) {
      this.SET_SELECTED_POST(val);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-group-item {
  margin: 10px 0;
}
</style>
