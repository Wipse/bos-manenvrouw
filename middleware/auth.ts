import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore();

  // Als de gebruiker niet is ingelogd en niet op de homepage is
  if (!auth.isAuthenticated && to.path !== "/") {
    return navigateTo("/");
  }
});
