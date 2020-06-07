<template>
  <div :class="{ dark: mode === 'dark', light: mode === 'light' }">
    <div class="home">
      <div class="container">
        <div class="name">
          {{ $t("hello", { name: user.name }) | capitalize }}
        </div>
        <span @click="handleLogout" class="logout">{{ $t("logout") }}</span>
        <div class="select-language">
          <span>{{ $t("selectLanguage") }}</span>
          <select v-model="locale" @change="handleLocale">
            <option
              v-for="(lang, i) in langs"
              :key="`lang-${i}`"
              :value="lang.key"
            >
              {{ lang.label }}
            </option>
          </select>
        </div>
        <div class="mode">
          {{ $t("modeSelection") }}
          <div class="checkbox">
            <input
              type="radio"
              id="male"
              v-model="mode"
              name="mode"
              value="dark"
            />
            <label for="male">{{ $t("dark") }}</label>
            <input
              type="radio"
              id="male"
              v-model="mode"
              name="mode"
              value="light"
            />
            <label for="male">{{ $t("light") }}</label>
          </div>
        </div>
      </div>
      <Dashboard />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/Dashboard.vue";
import router from "../router";

export default {
  name: "Home",
  router,
  mounted() {
    let user = JSON.parse(sessionStorage.getItem("userDetails"));
    if (!user) this.$router.push("/login");
    else this.user = user;
  },
  components: {
    Dashboard
  },
  data() {
    return {
      user: "",
      langs: [
        { key: "en-US", label: "English" },
        { key: "hn-IN", label: "Hindi" }
      ],
      mode: "light",
      styleToImport: "dark.scss",
      locale: this.$i18n && this.$i18n.locale
    };
  },
  methods: {
    handleLogout() {
      sessionStorage.removeItem("userDetails");
      this.$router.push("/login");
    },
    handleLocale() {
      this.$i18n.locale = this.locale;
    }
  },
  filters: {
    capitalize(text) {
      return text.toLocaleUpperCase();
    }
  }
};
</script>

<style lang="scss" scoped>
.dark {
  @import "../assets/dark.scss";
}
.light {
  @import "../assets/light.scss";
}
.home {
  display: flex;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
.container {
  padding: 20px;
  width: 250px;
}
.select-language {
  margin-top: 20px;
  span {
    margin-right: 5px;
  }
  select {
    padding: 2px;
  }
}
.mode {
  margin-top: 20px;
  .checkbox {
    margin-top: 5px;
  }
}
.name {
  font-size: 16px;
  font-family: cursive;
  color: #1bd1be;
}
.logout {
  font-size: 12px;
  color: #ffa200;
  text-decoration: underline;
  cursor: pointer;
}
</style>
