<template>
  <div class="page">
    <div class="left-sidebar">
      <!-- Sidebar -->
      <LeftSidebar />
    </div>
    <div class="content">
      <mainContent />
    </div>
  </div>
</template>

<script setup>
import LeftSidebar from "../components/LeftSidebar.vue";
import mainContent from "./Main_content.vue";
</script>

<style lang="scss">
.page {
  display: flex;
  height: 100vh;
}

.left-sidebar {
  width: calc(2rem + 32px);
  /* Add any other styling for the left sidebar */
}

.content {
  flex: 1;
  display: flex;
  justify-content: flex-end; /* Align content to the right */
  align-items: flex-start;
  padding-right: 3rem; /* Add desired right padding */
}
</style>
