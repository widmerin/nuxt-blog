<template>
  <div>
    <h1>Blog Posts</h1>
    <span>{{ time.currentDateTime }}</span>
    <article v-for="post in posts" :key="post.id">
      <heading><strong>{{ post.title }}</strong></heading>
      <p>{{ post.body }}</p>
      <NuxtLink :to="`/posts/${post.id}/`">Read more &raquo;</NuxtLink>
    </article>
  </div>
</template>
<script setup lang="ts">
const {data: posts} = await useFetch('https://jsonplaceholder.typicode.com/posts')

const {data: time} = await useFetch('/api/time')

</script>
