<template>
  <!-- Backdrop -->
  <Transition
    name="backdrop"
    enter-active-class="transition-opacity duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      @click="$emit('close')"
    ></div>
  </Transition>

  <!-- Side panel -->
  <Transition
    name="slide"
    enter-active-class="transition-transform duration-300 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-200 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <nav
      v-if="isOpen"
      class="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 overflow-y-auto"
    >
      <div class="p-6 pt-20">
        <!-- Logo in mobile menu -->
        <div class="flex justify-center mb-8">
          <img src="/logo.svg" alt="Logo" class="size-16 h-fit" />
        </div>

        <!-- Navigation links -->
        <div class="space-y-4">
          <MobileNavLink to="/info#help-needed" @click="$emit('close')">
            Laatste nieuws
          </MobileNavLink>

          <MobileNavLink to="/info#avond-gasten" @click="$emit('close')">
            Avondgasten
          </MobileNavLink>

          <MobileNavLink to="/daggasten" @click="$emit('close')">
            Daggasten
          </MobileNavLink>

          <MobileNavLink to="/help" @click="$emit('close')" :hasIcon="true">
            Belangrijke informatie
          </MobileNavLink>
        </div>
      </div>
    </nav>
  </Transition>
</template>

<script setup lang="ts">
type Props = {
  isOpen: boolean;
};

defineProps<Props>();
defineEmits<{
  close: [];
}>();
</script>
