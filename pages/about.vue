<template>
  <div>
    <h1>About us</h1>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    <span>{{ new Date() }}</span>
    <article v-for="post in posts" :key="post.id">
      <heading><strong>{{ post.title }}</strong></heading>
      <p>{{ post.body }}</p>
      <NuxtLink :to="`/posts/${post.id}`">Read more &raquo;</NuxtLink>
    </article>
</div>
</template>
<script setup lang="ts">
const {data: posts} = await useFetch('https://jsonplaceholder.typicode.com/posts')
</script>
