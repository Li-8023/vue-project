<template>
  <div>
     <div class="heading-container">
        <headingPage />
     </div>
    <h1 class="hello">hello</h1>
    <LeftSidebar />
  </div>
  
</template>
<script setup>
import headingPage from './My_attendance_heading.vue';
import LeftSidebar from '../../components/LeftSidebar.vue';
</script>

<style>
.hello {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.heading-container {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>