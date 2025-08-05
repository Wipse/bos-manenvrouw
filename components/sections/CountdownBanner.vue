<template>
  <section class="bg-black">
    <div class="container mx-auto text-white text-center py-2 text-sm px-4">
      <p v-if="!isWeddingDay">
        Nog {{ days }} dagen, {{ hours }} uur, {{ minutes }} minuten en
        {{ seconds }} seconden tot de huwelijksdag!
      </p>
      <p v-else class="animate-pulse font-bold">
        🎉 Vandaag is de grote dag! 🎉
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const weddingDate = new Date("2025-10-10T00:00:00");

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const isWeddingDay = ref(false);

let intervalId: NodeJS.Timeout | null = null;

const updateCountdown = () => {
  const now = new Date().getTime();
  const weddingTime = weddingDate.getTime();
  const difference = weddingTime - now;

  if (difference > 0) {
    days.value = Math.floor(difference / (1000 * 60 * 60 * 24));
    hours.value = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutes.value = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((difference % (1000 * 60)) / 1000);
    isWeddingDay.value = false;
  } else {
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    isWeddingDay.value = true;
  }
};

onMounted(() => {
  updateCountdown();

  intervalId = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>
