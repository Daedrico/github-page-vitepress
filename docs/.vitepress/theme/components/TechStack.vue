<template>
  <div class="ts">
    <h2 class="ts-title">Tech Stack</h2>
    <div class="ts-groups">
      <div v-for="group in groups" :key="group.label" class="ts-group">
        <div class="ts-label">{{ group.label }}</div>
        <div class="ts-badges">
          <TechBadge v-for="tech in group.techs" :key="tech" :name="tech" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TechBadge from './TechBadge.vue'

const groups = [
  {
    label: 'Languages & Runtimes',
    techs: ['JavaScript', 'TypeScript', 'Node.js', 'Apex'],
  },
  {
    label: 'Platforms',
    techs: ['Salesforce', 'Heroku', 'GitHub'],
  },
  {
    label: 'Frontend',
    techs: ['Vue.js', 'LWC', 'VitePress'],
  },
  {
    label: 'Tools',
    techs: ['VS Code', 'npm', 'Git'],
  },
]
</script>

<style scoped>
.ts {
  max-width: 768px;
  margin: 3rem auto 0;
  padding: 2rem 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}

.ts-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 1.25rem;
  letter-spacing: -0.01em;
}

.ts-groups {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ts-group {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}

.ts-label {
  min-width: 10rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  flex-shrink: 0;
}

.ts-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

@media (max-width: 480px) {
  .ts-group {
    flex-direction: column;
    gap: 0.4rem;
  }

  .ts-label {
    min-width: unset;
  }
}
</style>
