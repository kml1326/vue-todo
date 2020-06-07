<template>
  <div>
    <form class="form">
      <label class="title">{{ $t("enterMobileNumber") }}</label>
      <input
        type="number"
        v-model="mobile"
        class="input-box"
        placeholder="Mobile"
      />
      <label v-if="numberErrorMsg.length" class="error-msg">{{
        numberErrorMsg
      }}</label>

      <label class="title">{{ $t("enterName") }}</label>
      <input type="text" v-model="name" placeholder="Name" class="input-box" />
      <label v-if="nameErrorMsg.length" class="error-msg">{{
        nameErrorMsg
      }}</label>

      <button @click="handleLogin" class="login-btn">{{ $t("login") }}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      mobile: "",
      name: "",
      numberErrorMsg: "",
      nameErrorMsg: ""
    };
  },
  mounted() {
    let user = JSON.parse(sessionStorage.getItem("userDetails"));

    if (user) this.$router.push("/");
  },
  methods: {
    handleLogin(e) {
      e.preventDefault();
      const { mobile, name } = this;

      !(mobile.length == 10)
        ? (this.numberErrorMsg = this.$t("numberErrorMsg"))
        : (this.numberErrorMsg = "");

      !name.length
        ? (this.nameErrorMsg = this.$t("nameErrorMsg"))
        : (this.nameErrorMsg = "");

      if (mobile.length === 10 && name.length) {
        sessionStorage.setItem("userDetails", JSON.stringify({ mobile, name }));
        this.resetState();
        this.$router.push("/");
      }
    },
    resetState() {
      this.mobile = "";
      this.name = "";
      this.numberErrorMsg = "";
    }
  }
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
.title {
  align-self: baseline;
  margin-top: 15px;
  margin-bottom: 5px;
}
.error-msg {
  color: rgb(236, 13, 13);
  font-size: 12px;
  margin-top: 5px;
}

.login-btn {
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  outline: none;
  margin-top: 20px;
  border: none;
  background: #64b54d;
}
.input-box {
  padding: 5px;
  font-size: 14px;
}
</style>
