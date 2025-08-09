<template>
  <Teleport to="body">
    <Transition
      name="modal"
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        @click="closeModal"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <!-- Modal Content -->
        <div
          class="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full mx-4 transform transition-all duration-300"
          :class="isOpen ? 'scale-100' : 'scale-95'"
          @click.stop
        >
          <!-- Header -->
          <div
            class="relative bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-4 rounded-t-2xl"
          >
            <button
              @click="closeModal"
              class="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              aria-label="Sluiten"
            >
              <Icon name="mdi:close" class="size-6" />
            </button>

            <div class="flex items-center gap-3">
              <div class="px-2 py-1 bg-white/20 rounded-full">
                <Icon
                  name="mdi:exclamation-thick"
                  class="size-8 mt-1 text-white animate-pulse"
                />
              </div>
              <div>
                <h2 class="text-xl font-bold">Belangrijke informatie!</h2>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 space-y-4">
            <p class="text-gray-700 leading-relaxed">
              <strong class="text-gray-900">Let op!</strong> Deze website is
              speciaal ontworpen omdat we
              <span class="text-primary-600 font-semibold"
                >jullie hulp nodig hebben</span
              >
              om met elkaar een onvergetelijke herinnering voor het bruidspaar
              te creëren.
            </p>

            <div
              class="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-500"
            >
              <p class="text-sm text-gray-700">
                🎉 <strong>Flashmob</strong> en <strong>kaartjesactie</strong> -
                jouw medewerking is nodig om deze verrassingen te laten slagen!
              </p>
            </div>

            <p class="text-gray-600 text-sm">
              Klik hieronder om alle details te bekijken.
            </p>
          </div>

          <!-- Actions -->
          <div class="p-6 pt-0 flex flex-col sm:flex-row gap-3">
            <Button
              label="Bekijk"
              class="flex-1 bg-primary-600 hover:bg-primary-700 text-white justify-center"
              @click="handleViewClick"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
type Props = {
  isOpen: boolean;
};

defineProps<Props>();

const emit = defineEmits<{
  close: [];
}>();

const closeModal = () => {
  emit("close");
};

const handleViewClick = async () => {
  // Emit close immediately when user clicks to view important info
  // This ensures localStorage is set before navigation
  emit("close");

  // Small delay to ensure the modal state is properly updated
  await nextTick();

  // Navigate to help page after modal is closed
  await navigateTo("/help");
};
</script>

<style scoped>
.modal-enter-active .relative {
  transition: transform 0.3s ease-out;
}

.modal-enter-from .relative {
  transform: scale(0.95) translateY(-10px);
}

.modal-enter-to .relative {
  transform: scale(1) translateY(0);
}
</style>
