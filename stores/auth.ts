import { defineStore } from "pinia";

const AUTH_STORAGE_KEY = "wedding-auth-token";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    // Initialize auth state from localStorage
    initAuth() {
      if (process.client) {
        try {
          const savedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
          if (savedAuth === "true") {
            this.isAuthenticated = true;
          }
        } catch (error) {
          console.warn("Could not load auth from localStorage:", error);
        }
      }
    },

    login(password: string) {
      if (password === "S&B101025") {
        this.isAuthenticated = true;

        // Save to localStorage
        if (process.client) {
          try {
            localStorage.setItem(AUTH_STORAGE_KEY, "true");
          } catch (error) {
            console.warn("Could not save auth to localStorage:", error);
          }
        }

        return true;
      }
      return false;
    },

    logout() {
      this.isAuthenticated = false;

      // Remove from localStorage
      if (process.client) {
        try {
          localStorage.removeItem(AUTH_STORAGE_KEY);
        } catch (error) {
          console.warn("Could not remove auth from localStorage:", error);
        }
      }
    },
  },
});
