<template>
  <span class="tech-badge" :style="{ '--c': color }">{{ name }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>()

const colorMap: Record<string, string> = {
  'Node.js':    '#339933',
  'JavaScript': '#b8a000',
  'TypeScript': '#3178C6',
  'Salesforce': '#009FDB',
  'Apex':       '#1798c1',
  'LWC':        '#0b57d0',
  'Vue.js':     '#41B883',
  'Vue':        '#41B883',
  'Heroku':     '#6762a6',
  'npm':        '#CB3837',
  'VS Code':    '#007ACC',
  'gRPC':       '#c88600',
  'CLI':        '#64748b',
  'GitHub':     '#555555',
  'Git':        '#e84e31',
  'VitePress':  '#6467f2',
}

const color = colorMap[props.name] ?? '#64748b'
</script>

<style scoped>
.tech-badge {
  display: inline-block;
  padding: 0.18em 0.65em;
  border-radius: 99px;
  font-size: 0.78em;
  font-weight: 500;
  line-height: 1.6;
  color: var(--c);
  background: color-mix(in srgb, var(--c) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--c) 25%, transparent);
  white-space: nowrap;
}

:global(.dark) .tech-badge {
  filter: brightness(1.35);
}
</style>
