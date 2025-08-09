import { useAuthStore } from "~/stores/auth";

export default defineNuxtPlugin(() => {
  // Initialize auth state from localStorage on client-side
  const auth = useAuthStore();
  auth.initAuth();
});
