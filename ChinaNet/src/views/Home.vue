<template>
    <div class="container">
        <div class="background-image">
            <div class="window">
                <div class="content">
                    <h1 class="heading">吉安电信考勤登录界面</h1>
                    <div class="divider"></div>
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <input type="text" id="username" v-model="username" required class="input-field"
                                placeholder="请输入用户名称" />
                        </div>
                        <div class="form-group">
                            <input type="password" id="password" v-model="password" required class="input-field"
                                placeholder="请输入密码" />
                        </div>
                        <button class="custom-button" @click="goToNext">登录</button>
                        <p v-if="showWarning" class="warning">请输入用户名或登录密码</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      showWarning: false,
    };
  },
  computed: {
        isValidInput() {
            return this.username && this.password; // Check if both fields are non-empty
        },
    },
  methods: {
    goToNext() {
      if (this.isValidInput) {
                this.$router.push('/mainView');
            }
    },
    login() {
         // Here you can implement the login functionality,
            // such as sending the login request to a server or performing client-side validation.
            // You can access the entered username and password from this.username and this.password respectively.
        if (!this.username || !this.password) {
            // Check if either username or password is empty
            this.showWarning = true; // Show warning message
        } else {
            // Both username and password are entered
            this.showWarning = false; // Hide warning message
            console.log('Login request:', this.username, this.password);
            // Proceed with login functionality
        }
        console.log('Login request:', this.username, this.password);
    },
  },
};
</script>

<style>
.heading {
  font-size: 24px; /* Adjust the font size to your preference */
  color: #333; /* Adjust the color to your preference */
}
.warning {
  color: red;
}

button.custom-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: rgb(208, 245, 190);
  border-radius: 12px;
  color: black;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth transition */
}

button.custom-button:hover {
  background-color: transparent; /* Remove background color on hover */
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 190vh;
    position: relative;
}

.divider {
    height: 1px;
    background-color: #ccc;
    margin: 10px 0;
    width: 100%;
}

.background-image {
    background-image: url('../images/Login.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
}

.window {
    position: absolute;
    top: 30%;
    left: 30%;
    width: 40%;
    height: 40%;
    background-color: rgba(255, 255, 255, 0.943);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 768px) {
    /* Adjust the content size for smaller screens */
  .content {
    font-size: 14px;
  }
  /* Adjust the window size for smaller screens */
  .window {
    width: 80%;
    height: 60%;
  }
}

@media (max-width: 480px) {
    /* Further adjust the content size for even smaller screens */
  .content {
    font-size: 12px;
  }
  /* Further adjust the window size for even smaller screens */
  .window {
    width: 90%;
    height: 70%;
  }
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

.input-field {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    position: relative;
    display: flex;
}

input {
    width: 100%;
    padding: 5px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.content {
    position: relative;
    z-index: 1;
    text-align: center;
    color: rgb(24, 19, 19);
}
</style>

