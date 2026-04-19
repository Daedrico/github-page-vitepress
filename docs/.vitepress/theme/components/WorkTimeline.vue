<template>
  <div class="wt">
    <div class="wt-line">
      <div v-for="item in items" :key="item.company" :id="item.id" class="wt-item">
        <div class="wt-dot"></div>
        <div class="wt-body">
          <div class="wt-head">
            <div class="wt-company">
              <img v-if="item.logo" :src="withBase(item.logo)" :alt="item.company" class="company-logo" />
              <span v-else class="company-text">{{ item.company }}</span>
            </div>
            <span class="wt-period">{{ item.period }}</span>
          </div>
          <div class="wt-role">{{ item.role }}</div>
          <p class="wt-desc">{{ item.description }}</p>
        </div>
      </div>
    </div>

    <div class="wt-footer">
      <div class="wt-section" id="education">
        <h3>Education</h3>
        <p>
          <strong>Master's Degree in Computer Engineering</strong><br />
          Politecnico di Milano, 2013
        </p>
      </div>
      <div class="wt-section">
        <h3>Certifications</h3>
        <ul>
          <li>Salesforce Certified Platform Developer I</li>
          <li>Salesforce Certified Platform Developer II</li>
          <li>Salesforce Certified Development Lifecycle & Deployment</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress'

const items = [
  {
    id: 'deloitte',
    company: 'Deloitte',
    logo: '/logos/deloitte.svg',
    role: 'Tech Team Leader',
    period: '2017 – present',
    description:
      `
      I've been at Deloitte since 2017, following the acquisition of Telnext. Over time I moved from hands-on development into a tech team leadership role, though I stay involved in the actual implementation as well.\n\n
      Day to day this means: designing solution architectures, defining integration patterns between systems, leading the technical team, reviewing code, and making sure what gets built actually matches what was designed. I work directly with clients to understand requirements and translate them into technical decisions, then follow through on delivery.
      `
  },
  {
    id: 'telnext',
    company: 'Telnext',
    logo: null,
    role: 'Developer',
    period: '2016 – 2017',
    description: 'Telnext was a smaller consultancy where I worked as a developer. It was acquired by Deloitte in 2017 and I moved over with the team.'
  },
  {
    id: 'capgemini',
    company: 'Capgemini',
    logo: '/logos/capgemini.svg',
    role: 'Developer',
    period: '2013 – 2016',
    description:
      'My first role in the industry. I worked mainly on mobile and web projects for large clients in the telco, banking, and automotive sectors.',
  },
]
</script>

<style scoped>
.wt {
  margin-top: 1.5rem;
}

/* ── Timeline line ──────────────────────────────── */
.wt-line {
  position: relative;
  padding-left: 2.25rem;
}

.wt-line::before {
  content: '';
  position: absolute;
  left: 0.45rem;
  top: 0.6rem;
  bottom: 0.6rem;
  width: 2px;
  background: var(--vp-c-divider);
}

/* ── Timeline item ──────────────────────────────── */
.wt-item {
  position: relative;
  margin-bottom: 2.5rem;
}

.wt-dot {
  position: absolute;
  left: -2.25rem;
  top: 0.4rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  border: 2.5px solid var(--vp-c-bg);
  box-shadow: 0 0 0 2px var(--vp-c-brand-1);
}

.wt-body {
  padding-left: 0.25rem;
}

.wt-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.3rem;
}

.company-logo {
  height: 1.25em;
  vertical-align: middle;
  display: inline-block;
}

.company-text {
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--vp-c-text-1);
}

.wt-period {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  font-variant-numeric: tabular-nums;
}

.wt-role {
  font-weight: 600;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.4rem;
  font-size: 0.95rem;
}

.wt-desc {
  color: var(--vp-c-text-2);
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.65;
}

/* ── Footer (Education + Certs) ─────────────────── */
.wt-footer {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 1.75rem;
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.wt-section h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.6rem;
  color: var(--vp-c-text-1);
}

.wt-section p,
.wt-section li {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.65;
}

.wt-section p {
  margin: 0;
}

.wt-section ul {
  padding-left: 1.2rem;
  margin: 0;
}

@media (max-width: 640px) {
  .wt-footer {
    grid-template-columns: 1fr;
  }
}
</style>
