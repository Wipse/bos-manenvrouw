import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    login(password: string) {
      if (password === "123") {
        this.isAuthenticated = true;
        return true;
      }
      return false;
    },
    logout() {
      this.isAuthenticated = false;
    },
  },
});
