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

:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>
