<template>
  <div>
    <h1>{{  post.title }}</h1>
    <article>
      <p>{{  post.body }}</p>
    </article>
  </div>
</template>
<script setup lang="ts">
const id = useRoute().params.id
const {data: post} = await useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

</script>
