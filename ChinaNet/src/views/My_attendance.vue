<template>
  <div class="page">
    <div class="left-sidebar">
      <!-- Sidebar -->
      <LeftSidebar />
    </div>
    <div class="heading-container" style="margin-top: 20rem;">
      
      <heading></heading>
    </div>
    <div class="content">
      <!-- Content -->
      <router-view />
    </div>
  </div>
</template>

<script setup>
import LeftSidebar from '../components/LeftSidebar.vue';
import heading from '../views/My_attendance_pages/heading.vue'
</script>

<script>
export default {
  methods: {
    goToPage(page) {
      // Logic to navigate to the corresponding page based on the button clicked
      console.log('Navigating to', page);
      // You can use Vue Router's navigation methods here, such as:
      this.$router.push('/mainView/MyAtt/' + page );
    }
  }
};
</script>
<style>
.page {
  display: flex;
}


.left-sidebar {
  width: calc(2rem + 32px);
  /* Add any other styling for the left sidebar */
}

.content {
  margin-left: calc(2rem + 32px);
  /* Add any other styling for the content area */
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

button {
 padding: 10px 20px;
  background-color: transparent;
  color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

button::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #4ade80;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

button:hover::after {
  transform: scaleX(1);
}

button + button {
  margin-left: 30px; /* Add space between buttons */
}

button:focus {
  outline: none;
}
</style>
