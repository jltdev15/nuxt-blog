<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create post</AppButton>
    </section>
    <section>
      <h1>Existing Posts</h1>
      <PostList />
    </section>
  </div>
</template>
<script>
import PostList from "../../components/Posts/PostList.vue";
import AppButton from "../../components/UI/AppButton.vue";
export default {
  layout: "admin",
  components: {
    PostList,
    AppButton,
  },
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
