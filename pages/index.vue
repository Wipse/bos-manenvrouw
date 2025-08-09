<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Background image section (now on the left) -->
    <div class="relative hidden w-0 flex-1 lg:block">
      <img
        src="/images/intropic.jpeg"
        alt="Background"
        class="min-h-screen max-h-screen w-full object-cover object-center"
      />
      <div
        class="absolute inset-0 h-full w-full bg-gradient-to-b from-primary-800/50 to-primary-50/50"
      />
    </div>

    <!-- Login form section (now on the right) -->
    <div
      class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div class="mb-10">
          <CloverIcon />
          <h1
            class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900"
          >
            Op weg naar de bruiloft!
          </h1>
          <p class="mt-2 text-sm leading-5 text-gray-500">
            Voer hieronder de inlogcode in uit de brief bij de trouwkaart om zo
            toegang te krijgen tot de bruiloftsinformatie.
          </p>
          <p class="mt-2 text-sm leading-5 text-gray-500">
            Mocht je deze code kwijt zijn, stuur dan even een appje naar één van
            de ceremoniemeesters.
          </p>
        </div>

        <div class="mt-10">
          <div>
            <form @submit.prevent="handleLogin" class="space-y-6">
              <div>
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Inlogcode
                </label>
                <div class="mt-2">
                  <input
                    id="password"
                    v-model="password"
                    type="password"
                    class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div v-if="error" class="mt-2 text-sm text-red-600">
                  {{ error }}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-primary-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Inloggen
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          class="absolute bottom-4 right-4 text-xs tracking-wide font-light text-primary-700/70"
        >
          ~ Site door Wisse Heida
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "~/stores/auth";
import { useRouter } from "vue-router";

const password = ref("");
const error = ref("");
const auth = useAuthStore();
const router = useRouter();

// Check if user is already authenticated and redirect
onMounted(() => {
  if (auth.isAuthenticated) {
    router.push("/info");
  }
});

const handleLogin = () => {
  if (auth.login(password.value)) {
    router.push("/info");
  } else if (password.value === "") {
    error.value = "Je moet eerst een inlogcode invullen...";
    password.value = "";
  } else {
    error.value =
      "Oeps, dit is niet de juiste inlogcode... Heb je 'm goed ingetoetst?";
    password.value = "";
  }
};
</script>
