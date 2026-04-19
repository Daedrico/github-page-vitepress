<template>
  <h1 v-if="name" class="name">
    <span class="clip" v-html="name" />
  </h1>
  <p class="text">
    <span class="animated-word" :key="currentWord">{{ currentWord }}</span>
  </p>
  <p v-if="tagline" class="tagline" v-html="tagline" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const name = computed(() => frontmatter.value.hero?.name)
const tagline = computed(() => frontmatter.value.hero?.tagline)

const words = ['Developer', 'Tech Lead', 'Builder', 'Problem Solver']
const currentIndex = ref(0)
const currentWord = computed(() => words[currentIndex.value])

let interval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % words.length
  }, 2500)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
.animated-word {
  display: inline-block;
  animation: word-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes word-in {
  from {
    opacity: 0;
    transform: translateY(14px);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}
</style>
