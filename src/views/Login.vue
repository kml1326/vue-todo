<template>
  <div class="login">
    <LoginPage />
  </div>
</template>

<script>
import LoginPage from "@/components/LoginPage";

export default {
  name: "Login",
  components: {
    LoginPage
  }
};
</script>

<style scoped>
.login {
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
