<template>
  <header class="header">
    <div class="logo">
      <!-- Add your logo here -->
      <img src="@/assets/logo.png" alt="Logo">
    </div>
    <nav>
      <router-link to="/" class="nav-link" exact>Home</router-link>
      <router-link to="/about-us" class="nav-link">About Us</router-link>
      <router-link to="/events" class="nav-link">Events</router-link>
      <router-link to="/services" class="nav-link">Services</router-link>
      <router-link to="/volunteer" class="nav-link">Volunteer</router-link>
      <router-link to="/contact-us" class="nav-link">Contact Us</router-link>
      <router-link to="/gallery" class="nav-link">Gallery</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection'
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: var(--white-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo img {
  width: 128px; /* Set the logo width */
  height: 128px; /* Set the logo height */
}

nav {
  display: flex;
  gap: 20px; /* Adequate spacing between links */
}

.nav-link {
  color: var(--primary-color);
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: var(--secondary-color);
  color: var(--white-color);
}
</style>
