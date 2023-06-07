<template>
  <div class="container">
    <div class="background-image">
      <div class="window">
        <h1 class="heading">吉安电信考勤网</h1>
        <div class="content">
          <form @submit.prevent="login">
            <div class="form-group">
              <input
                type="text"
                id="username"
                v-model="username"
                required
                class="input-field"
                placeholder="请输入用户名称"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                id="password"
                v-model="password"
                required
                class="input-field"
                placeholder="请输入密码"
              />
            </div>
            <button class="custom-button">登录</button>
            <p v-show="showWarning" class="warning">用户名或密码不正确</p>
            <p v-show="showError" class="error">{{ errorMessage }}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      showWarning: false,
      showError: false,
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      if (!this.username || !this.password) {
        this.showWarning = true;
        this.showError = false;
      } else {
        this.showWarning = false;
        this.showError = false;

        try {
          const response = await axios.post("/api/jwt/token/", {
            username: this.username,
            password: this.password,
          });

          const { access, refresh } = response.data;

          if (access && refresh) {
            console.log("Login successful");
            this.$router.push("/mainView");
          } else {
            console.log("Invalid username or password");
            this.showWarning = false;
            this.showError = true;
            this.errorMessage = "用户名或密码不正确";
          }
        } catch (error) {
          console.error("Error obtaining token pair:", error);
          this.showWarning = false;
          this.showError = true;
          this.errorMessage = "用户名或密码不正确或有错误发生，请稍后重试";
        }
      }
    },
  },
};
</script>


<style>
.heading {
  margin-left: 2rem;
  font-size: 24px !important;
  color: #333 !important;
}

.warning {
  color: red;
  display: block;
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
  width: 100vw; /* Changed from 190vh to 100vw */
  position: relative;
}

.divider {
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  width: 100%;
}

.background-image {
  background-image: url("../images/Login.jpg");
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
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); /* Add box shadow */
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
