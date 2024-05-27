<template>
  <section class="hero curvy fade-in">
    <div class="hero-content">
      <h1>Welcome to Ballyheigue Community Center</h1>
      <p>Connecting our community through programs, events, and services.</p>
    </div>
    <div class="hero-placeholder">
      <!-- Placeholder for the hero image -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
};
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 100px 20px;
  background-color: var(--secondary-color);
  background-size: cover;
  font-family: 'Mulish', sans-serif;
}
.hero-content h1 {
  font-size: 3em;
  margin-bottom: 20px;
  font-weight: bold;
  color: var(--white-color);
}
.hero-content p {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: var(--white-color);
}
.hero-placeholder {
  width: 100%;
  height: 300px;
  background: url('https://via.placeholder.com/1200x300') no-repeat center center;
  background-size: cover;
}
</style>
