<template>
  <section class="quick-links curvy fade-in">
    <h2>Quick Links</h2>
    <div class="links">
      <router-link to="/events">Events</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact-us">Contact Us</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'QuickLinks'
};
</script>

<style scoped>
.quick-links {
  text-align: center;
  padding: 50px 20px;
}
.quick-links h2 {
  color: var(--primary-color);
}
.quick-links .links a {
  display: inline-block;
  margin: 10px 15px;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: var(--white-color);
  text-decoration: none;
  border-radius: 30px;
  transition: background-color 0.3s;
}
.quick-links .links a:hover {
  background-color: var(--accent-color);
}
</style>
