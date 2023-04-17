<template>
  <main class="container">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
         <NuxtLink to="/test1">test 1</NuxtLink>
        </li>
        <li>
         <NuxtLink to="/test2">test 2</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/test3">test 3</NuxtLink>
        </li>

      </ul>
    </nav>
    <div><NuxtPage /></div>
  </main>
</template>
<script setup lang="ts">
import '@picocss/pico'
</script>
