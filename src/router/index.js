import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutUs from '../components/AboutUs.vue';
import EventsSection from '../components/EventsSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import Volunteer from '../components/Volunteer.vue';
import ContactUs from '../components/ContactUs.vue';
import GallerySection from '../components/GallerySection.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about-us', component: AboutUs },
  { path: '/events', component: EventsSection },
  { path: '/services', component: ServicesSection },
  { path: '/volunteer', component: Volunteer },
  { path: '/contact-us', component: ContactUs },
  { path: '/gallery', component: GallerySection },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
