<template>
     <div class="page">
        <div class="left-sidebar">
        <!-- Sidebar -->
        <LeftSidebar />
        </div>
        <div class="heading-container">
        <h1>hello</h1>
        <headingPage></headingPage>
        </div>
        <div class="content">
        <!-- Content -->
        <router-view />
        </div>
  </div>
    
</template>

<script setup>
import LeftSidebar from '../components/LeftSidebar.vue';
</script>