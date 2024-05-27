<template>
  <section class="about-us curvy fade-in" id="about">
    <h2>About Us</h2>
    <div class="content">
      <p><strong>Mission Statement:</strong> Our mission is to connect and support the community through a range of programs, events, and services.</p>
      <p><strong>History:</strong> Ballyheigue Community Center has been serving the community since 1990, providing a space for learning, growth, and community connection.</p>
      <h3>Staff and Board Members</h3>
      <div class="staff">
        <div v-for="member in staff" :key="member.id" class="staff-member">
          <img :src="member.photo" :alt="member.name">
          <p>{{ member.name }}</p>
          <p>{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      staff: [
        { id: 1, name: 'John Doe', role: 'Director', photo: 'path-to-photo1.jpg' },
        { id: 2, name: 'Jane Smith', role: 'Program Coordinator', photo: 'path-to-photo2.jpg' },
        // Add more staff members
      ]
    };
  }
};
</script>

<style scoped>
.about-us {
  padding: 50px 20px;
}
.about-us h2 {
  color: var(--primary-color);
}
.staff {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.staff-member {
  text-align: center;
  margin: 20px;
}
.staff-member img {
  max-width: 100px;
  height: auto;
  border-radius: 50%;
}
</style>
