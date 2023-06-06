<template>
    <div class="bg-gray-100 h-full">
        <!-- Sidebar -->
		<LeftSidebar />

        <!--我的考勤heading menu-->
        <h1 class="hello">hello</h1>

    </div>
</template>

<script setup>
import LeftSidebar from '../components/LeftSidebar.vue';
import componentMy from './My_attendance_components/component.vue';
</script>

<style>
.hello {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
