<template>
  <div>
    <h1>{{  post.title }}</h1>
    <span>{{ time.currentDateTime }}</span>
    <article>
      <p>{{  post.body }}</p>
    </article>
  </div>
</template>
<script setup lang="ts">
const id = useRoute().params.id
const {data: post} = await useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
const {data: time} = await useFetch('/api/time')
</script>
