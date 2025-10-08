<template>
    <div class="fixed bottom-4 right-4 z-50">
      <Transition
        mode="out-in"
        enter-active-class="transition-all duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <!-- Toon óf de knop óf het paneel, nooit tegelijk -->
        <button
          v-if="!isExpanded"
          key="btn"
          @click.stop="toggleWidget"
          class="bg-primary-500 hover:bg-primary-600 text-white rounded-xl p-4 shadow-lg cursor-pointer"
        >
          <div class="flex items-center gap-3">
            <div class="relative flex items-center justify-center">
              <div class="absolute size-4 rounded-full bg-green-400/50 animate-ping"></div>
              <div class="size-3 rounded-full bg-green-400"></div>
            </div>
            <span class="font-medium">Live Kerkdienst</span>
          </div>
        </button>
  
        <div
          v-else
          key="panel"
          class="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 w-80 max-w-[calc(100vw-2rem)]"
        >
          <!-- Header -->
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <div class="relative flex items-center justify-center">
                <div class="absolute size-4 rounded-full bg-green-400/50 animate-ping"></div>
                <div class="size-3 rounded-full bg-green-400"></div>
              </div>
              <h3 class="font-semibold text-gray-900">Live Kerkdienst</h3>
            </div>
            <button @click="toggleWidget" class="text-gray-400 hover:text-gray-600 transition-colors">
              <Icon name="mdi:close" class="size-5" />
            </button>
          </div>
  

      <!-- Content -->
      <div class="space-y-3">
        <p class="text-sm text-gray-600">
          Volg de trouwdienst van Selvan & Bertine live vanuit de Hervormde Kerk in Sellingen
        </p>
        
        <div class="bg-gray-50 rounded-lg p-3">
          <div class="flex items-center gap-2 mb-2">
            <Icon name="mdi:calendar" class="size-4 text-primary-600" />
            <span class="text-sm font-medium text-gray-700">10 oktober 2025</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="mdi:clock" class="size-4 text-primary-600" />
            <span class="text-sm font-medium text-gray-700">13:30</span>
          </div>
        </div>

        <!-- Action button -->
        <a
          href="https://kerkdienstgemist.nl/stations/2500/events/event/16207959-202510101330"
          target="_blank"
          rel="noopener noreferrer"
          class="block w-full bg-primary-600 hover:bg-primary-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors duration-200"
        >
          <div class="flex items-center justify-center gap-2">
            <Icon name="mdi:play-circle" class="size-5" />
            <span>Bekijk Live Stream</span>
            <Icon name="mdi:external-link" class="size-4" />
          </div>
        </a>

        <!-- Info text -->
        <p class="text-xs text-gray-500 text-center">
          De livestream start automatisch om 13:30
        </p>
      </div>
    </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const isExpanded = ref(false);

const toggleWidget = () => {
  console.log('Toggle widget clicked, current state:', isExpanded.value);
  isExpanded.value = !isExpanded.value;
  console.log('New state:', isExpanded.value);
};

// Auto-collapse when clicking outside (optional)
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const widgetContainer = target.closest('.fixed.bottom-4.right-4');
  
  if (isExpanded.value && !widgetContainer) {
    isExpanded.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* Smooth animations */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}
</style>
