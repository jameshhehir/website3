<template>
  <div id="app">
    <HeaderSection />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';

export default {
  name: 'App',
  components: {
    HeaderSection
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap');

/* Define the color scheme as CSS variables */
:root {
  --primary-color: #3F5965;
  --secondary-color: #5A92A4;
  --accent-color: #024C60;
  --background-color: #f9f9f9;
  --text-color: #333;
  --white-color: #fff;
}

/* Global styles */
body {
  margin: 0;
  font-family: 'Mulish', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
}

h1, h2 {
  font-weight: bold;
  color: var(--primary-color);
}

/* Transition styles */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Fade in from the top */
.fade-in {
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
