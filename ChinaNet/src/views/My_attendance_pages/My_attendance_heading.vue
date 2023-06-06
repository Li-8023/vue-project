<template>
    <div class="page">
        <div class="content">
        <div class="button-group">
            <button @click="goToPage('BeiAn')">备案申请</button>
            <button @click="goToPage('GongDan')">工单审批</button>
            <button @click="goToPage('KaoQinQingDan')">考勤清单</button>
            <button @click="goToPage('KaoQinTongJi')">考勤统计</button>
        </div>
        <!-- Content -->
        <router-view />
        </div>
    </div>
</template>

<script setup>
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
