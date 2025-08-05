<template>
  <section
    id="help-needed"
    class="bg-white w-screen h-screen flex items-center justify-center relative"
  >
    <div class="grid grid-cols-12 container mx-auto h-full relative z-10">
      <div class="col-span-6 flex flex-col justify-center">
        <img
          src="/helpneeded.svg"
          alt="Help needed"
          class="size-[20rem] h-fit mb-6"
        />
        <div class="w-fit">
          <Heading title="Wij hebben jullie hulp nodig" size="h2" is_bold />
          <div class="min-h-[3px] w-5/6 rounded-full bg-primary-500 mb-4"></div>
        </div>
        <p class="leading-[32px] mb-6 text-gray-700">
          We gaan met z'n allen het bruidspaar verrassen! Op twee verschillende
          manieren. Om deze verrassingen tot een succes te maken, hebben wij
          <span class="font-bold"> jullie medewerking nodig!</span>
        </p>
        <Button label="Lees meer" class="w-fit" to="/help" />
      </div>
      <div class="col-span-6 flex flex-col justify-center"><NewsCard /></div>
    </div>
    <div
      class="absolute right-0 top-0 w-2/5 h-full bg-gradient-to-l from-primary-500/60 to-white"
    />
  </section>
</template>
