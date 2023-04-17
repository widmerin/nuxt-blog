<template>
  <div>
    <h1>Test 1 - Path: {{ $route.fullPath }}</h1>
    <span>Generated at: {{generatedAt}} <br />
    <strong>{{ ms || '&nbsp;' }}</strong> ms ago</span>
    <article v-for="post in posts" :key="post.id">
      <heading><strong>{{ post.title }}</strong></heading>
      <p>{{ post.body }}</p>
      <NuxtLink :to="`/posts/${post.id}`">Read more &raquo;</NuxtLink>
    </article>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const {data: posts} = await useFetch('https://jsonplaceholder.typicode.com/posts')
const generatedAt = useState(() => new Date().toISOString())
const date = new Date(generatedAt.value)
const ms = ref()
onMounted(() => {
  ms.value = new Intl.NumberFormat().format(Date.now() - date.valueOf())
})


</script>
