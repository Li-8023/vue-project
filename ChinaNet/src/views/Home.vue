<template>
    <div class="container">
        <div class="background-image">
            <div class="window">
                <div class="content">
                    <h1>登录界面</h1>
                    <div class="divider"></div>
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <!--<label for="username">Username:</label>-->
                            <input type="text" id="username" v-model="username" required class="input-field"
                                placeholder="请输入用户名称" />
                        </div>
                        <div class="form-group">
                            <!--<label for="password">Password:</label>-->
                            <input type="password" id="password" v-model="password" required class="input-field"
                                placeholder="请输入密码" />
                        </div>
                        <button type="submit">Login</button>
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
        };
    },
    methods: {
        login() {
            // Here you can implement the login functionality,
            // such as sending the login request to a server or performing client-side validation.
            // You can access the entered username and password from this.username and this.password respectively.
            console.log('Login request:', this.username, this.password);
        },
    },
};
</script>

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 190vh;
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

