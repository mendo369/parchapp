<script setup>
defineProps({
  parche: {
    id: String,
    user: {
      name: String,
      url: String,
    },
    date: String,
    city: String,
    description: String,
    media: Array,
    comments: Number,
    likes: Number,
  },
});
</script>

<template>
  <section class="parche">
    <div class="info-user">
      <div class="user-profile">
        <img src="@/assets/logo.svg" alt="user profile" class="user-profile" />
      </div>
      <div class="other-info">
        <h4>{{ parche.user.name }}</h4>
        <h5>{{ parche.date }}</h5>
      </div>
    </div>
    <div class="description">
      <p>
        <span class="ciudad">{{ parche.city }}</span>
        {{ parche.description }}
      </p>
    </div>
    <div class="multimedia"></div>
    <div class="c-l">
      <div class="likes">
        <img src="@/assets/icons/like.svg" alt="likes" /><span>{{
            parche.likes
        }}</span>
      </div>
      <div class="comments">
        <img src="@/assets/icons/comment.svg" alt="comments" /><span>{{
            parche.comments
        }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "@/assets/css/parche.css";
</style>
