<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img :src="logoURL" alt="Logo" :style="{ width: 'calc(2rem + 32px)' }" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-symbols-outlined"> double_arrow </span>
      </button>
    </div>

    <h3>目录</h3>
    <div class="menu">
      <router-link to="/mainView/permission" class="button">
        <span class="material-symbols-outlined"> account_circle </span>
        <span class="text">这里填写用户名称</span>
      </router-link>
      <router-link to="/mainView" class="button">
        <span class="material-symbols-outlined"> document_scanner </span>
        <span class="text">首页</span>
      </router-link>
      <router-link to="/mainView/MyAtt" class="button">
        <span class="material-symbols-outlined"> person </span>
        <span class="text">我的考勤</span>
      </router-link>
      <router-link to="/mainView/apartment" class="button">
        <span class="material-symbols-outlined"> domain </span>
        <span class="text">部门考勤统计</span>
      </router-link>
      <router-link to="/mainView/company" class="button">
        <span class="material-symbols-outlined"> diversity_3 </span>
        <span class="text">公司考勤统计</span>
      </router-link>
      <router-link to="/mainView/system" class="button">
        <span class="material-symbols-outlined"> settings_suggest </span>
        <span class="text">系统管理</span>
      </router-link>
      <router-link to="/mainView/permission" class="button">
        <span class="material-symbols-outlined"> signature </span>
        <span class="text">权限管理</span>
      </router-link>
    </div>

    <div class="flex"></div>
    <div class="menu"></div>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import logoURL from "../images/logo1.png";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;

  background-color: var(--dark);
  color: var(--light);

  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  transition: 0.2s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;
      .material-symbols-outlined {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-symbols-outlined {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      transition: 0.2s ease-out;
      padding: 0.5rem 1rem;

      .material-symbols-outlined {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        background-color: var(--dark-alt);

        .material-symbols-outlined,
        .text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        background-color: var(--dark-alt);
        border-right: 5px solid var(--primary);

        .material-symbols-outlined,
        .text {
          color: var(--primary);
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-symbols-outlined {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>
