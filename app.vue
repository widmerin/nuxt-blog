<template>
  <main class="container">
    <nav>
      <ul>
        <li>
          <NuxtLink href="/">Home</NuxtLink>
        </li>
        <li>
         <NuxtLink href="/test1">test 1</NuxtLink>
        </li>
        <li>
         <NuxtLink href="/test2">test 2</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/static">static</NuxtLink>
        </li>

      </ul>
    </nav>
    <div><NuxtPage /></div>
  </main>
</template>
<script setup lang="ts">
import '@picocss/pico'
</script>
