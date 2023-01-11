<template>
  <div>
    <h1>ssr</h1>
    <p>{{ time.currentDateTime }}</p>
  </div>
</template>
<script setup lang="ts">
  const {data: time} = await useFetch('/api/time')
</script>
