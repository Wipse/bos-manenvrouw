<template>
  <section
    class="py-2 w-full flex justify-center items-center absolute top-11 left-0"
  >
    <div class="relative w-[90%] flex justify-center">
      <!-- Logo - centraal gepositioneerd -->
      <img src="/logo.svg" alt="Help needed" class="size-20 h-fit" />

      <!-- Linker navigatie - absoluut gepositioneerd -->
      <div class="absolute left-0 top-0 flex items-start gap-6">
        <HeaderLink to="/info#help-needed"> Laatste nieuws </HeaderLink>
        <HeaderLink to="/info#avond-gasten"> Avondgasten </HeaderLink>
        <HeaderLink to="/daggasten"> Daggasten </HeaderLink>
      </div>

      <!-- Rechter navigatie - absoluut gepositioneerd -->
      <div class="absolute right-0 top-0 flex items-start gap-6">
        <HeaderLink to="/help" :isRightSide="true">
          Belangrijke informatie
        </HeaderLink>
      </div>
    </div>
  </section>
</template>
