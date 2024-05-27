<template>
  <div>
    <HeroSection />
    <QuickLinks />
  </div>
</template>

<script>
import HeroSection from './HeroSection.vue';
import QuickLinks from './QuickLinks.vue';

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    QuickLinks
  }
};
</script>

<style scoped>
/* Add any styles for the HomePage here */
</style>
