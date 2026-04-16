<template>
  <div class="pg">
    <div v-for="project in projects" :key="project.title" class="pg-card">
      <div class="pg-top">
        <h3 class="pg-title">
          <a :href="project.github" target="_blank" rel="noopener">{{ project.title }}</a>
        </h3>
        <div class="pg-tags">
          <TechBadge v-for="tag in project.tags" :key="tag" :name="tag" />
        </div>
      </div>
      <p class="pg-desc">{{ project.description }}</p>
      <ul class="pg-bullets">
        <li v-for="b in project.bullets" :key="b">{{ b }}</li>
      </ul>
      <div class="pg-links">
        <a :href="project.github" target="_blank" rel="noopener" class="pg-link">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
              0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
              -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
              .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
              -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27
              .68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12
              .51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
              0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          GitHub
        </a>
        <a v-if="project.npm" :href="project.npm" target="_blank" rel="noopener" class="pg-link pg-link--npm">
          <svg width="14" height="14" viewBox="0 0 18 7" fill="currentColor" aria-hidden="true">
            <path d="M0 0h18v6H9V7H5V6H0V0zm1 5h2V2h1v3h1V1H1v4zm5-4v5h2V5h2V1H6zm3 3V2h1v2H9zm3-3v4h2V2h1v3h1V2h1v3h1V1h-6z"/>
          </svg>
          npm
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TechBadge from './TechBadge.vue'

const projects = [
  {
    title: 'sf-bulker',
    description:
      'Salesforce Data Loader works fine for a one-off import. For repeated migration work where you\'re constantly tweaking mappings and re-running the same job, it gets annoying fast. sf-bulker reads everything from a JSON config file.',
    bullets: [
      'Config in config.json, versioned alongside your project',
      'No Java, just Node.js 18+',
      'OAuth 2.0 client credentials, no browser needed',
      'rowTransform functions let you clean or remap data before upload',
      'Outputs timestamped success/failure CSVs',
    ],
    tags: ['Node.js', 'Salesforce', 'CLI'],
    github: 'https://github.com/Daedrico/sf-bulker',
  },
  {
    title: 'sf-pubsub',
    description:
      'Connects to a Salesforce org using OAuth client credentials and subscribes to any Platform Event. Payloads get saved to timestamped files. Setup is just a .env file.',
    bullets: [
      'Subscribes from the earliest available event',
      'Event path configurable via env var',
      'Output is pretty-printed JSON, one file per minute',
    ],
    tags: ['Node.js', 'Salesforce', 'gRPC'],
    github: 'https://github.com/Daedrico/sf-pubsub',
  },
  {
    title: 'csv-to-object',
    description:
      'Give it a CSV, get back Salesforce metadata ready to deploy. Handles CustomObject field definitions and CustomMetadata records.',
    bullets: [
      'npm run fields generates a CustomObject XML with field definitions',
      'npm run cm generates one CustomMetadata file per CSV row',
      'Supports Text, Currency, Number, Date, Picklist, MultiselectPicklist',
    ],
    tags: ['Node.js', 'Salesforce', 'CLI'],
    github: 'https://github.com/Daedrico/csv-to-object',
  },
  {
    title: 'SPRR — VS Code Extension',
    description:
      'Open a .object-meta.xml file, run SPRR: Create report from the Command Palette, and get an interactive table showing all RecordTypes and their enabled picklist values.',
    bullets: [
      'Dropdown to select any picklist field by API name',
      'One column per RecordType',
      'Adapts to VS Code light and dark mode',
      'No files written to disk',
    ],
    tags: ['JavaScript', 'VS Code', 'Salesforce'],
    github: 'https://github.com/Daedrico/vs-code-rtpick-extension',
  },
  {
    title: 'thate',
    description:
      'The name is short for "translation hate". Clients work in Excel, Salesforce works with .stf files. thate converts in both directions.',
    bullets: [
      'thate excel converts .stf to .xlsx',
      'thate stf converts .xlsx back to .stf',
      '--omit flag strips already-translated values from the Excel output',
      'Config file to set paths and filter unwanted entries',
    ],
    tags: ['Node.js', 'Salesforce', 'CLI', 'npm'],
    github: 'https://github.com/Daedrico/thate',
    npm: 'https://www.npmjs.com/package/thate',
  },
]
</script>

<style scoped>
.pg {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.pg-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.2s;
}

.pg-card:hover {
  border-color: var(--vp-c-brand-1);
}

.pg-top {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.pg-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
}

.pg-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.pg-title a:hover {
  color: var(--vp-c-brand-1);
}

.pg-bullets {
  margin: 0;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.pg-bullets li {
  font-size: 0.84rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.pg-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.pg-desc {
  margin: 0;
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  flex: 1;
}

.pg-links {
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
}

.pg-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  text-decoration: none;
  padding: 0.25em 0.6em;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  transition: color 0.15s, border-color 0.15s;
}

.pg-link:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.pg-link--npm:hover {
  color: #CB3837;
  border-color: #CB3837;
}
</style>
