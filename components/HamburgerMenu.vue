<template>
  <button
    @click="$emit('toggle')"
    class="relative z-50 p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
    :class="{ 'fixed top-4 right-4': isOpen }"
    aria-label="Menu toggle"
  >
    <div class="w-6 h-6 flex flex-col justify-center items-center space-y-1">
      <span
        class="block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
        :class="{
          'rotate-45 translate-y-1.5': isOpen,
          'rotate-0 translate-y-0': !isOpen,
        }"
      ></span>
      <span
        class="block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
        :class="{
          'opacity-0': isOpen,
          'opacity-100': !isOpen,
        }"
      ></span>
      <span
        class="block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
        :class="{
          '-rotate-45 -translate-y-1.5': isOpen,
          'rotate-0 translate-y-0': !isOpen,
        }"
      ></span>
    </div>
  </button>
</template>

<script setup lang="ts">
type Props = {
  isOpen: boolean;
};

defineProps<Props>();
defineEmits<{
  toggle: [];
}>();
</script>
