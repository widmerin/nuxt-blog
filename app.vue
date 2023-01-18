<template>
  <main class="container">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about/">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/posts/1/">Article 1</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/posts/2/">Article 2</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/posts/3/">Article 3</NuxtLink>
        </li>
      </ul>
    </nav>
    <div><NuxtPage /></div>
  </main>
</template>
<script setup lang="ts">
import '@picocss/pico'
</script>
