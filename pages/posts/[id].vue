<template>
  <div>
    <h1>{{  post.title }}</h1>
    <span>Generated at: {{generatedAt}} <br />
    Generated <strong>{{ ms || '&nbsp;' }}</strong> ms ago</span>
    <article>
      <p>{{  post.body }}</p>
    </article>
  </div>
</template>
<script setup lang="ts">
const id = useRoute().params.id
const {data: post} = await useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
const generatedAt = useState(() => new Date().toISOString())
const date = new Date(generatedAt.value)
const ms = ref()
onMounted(() => {
  ms.value = new Intl.NumberFormat().format(Date.now() - date.valueOf())
})
</script>
