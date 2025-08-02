<template>
  <section
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
          <Heading title="Wij hebben jullie hulp nodig!" size="h2" is_bold />
          <div class="min-h-[3px] w-5/6 rounded-full bg-primary-500 mb-4"></div>
        </div>
        <p class="leading-[32px] mb-6 text-gray-700">
          Wij - de cermoniemeesters - hebben twee ideeën bedacht voor tijdens
          het feest. Om deze ideeën te laten slagen, hebben wij iedereen zijn
          hulp nodig. Kunnen jullie ons helpen door de instructies op de
          volgende pagina te volgen?
        </p>
        <Button label="Lees meer" class="w-fit" />
      </div>
      <div class="col-span-6 flex flex-col justify-center"><NewsCard /></div>
    </div>
    <div
      class="absolute right-0 top-0 w-2/5 h-full bg-gradient-to-l from-primary-500/60 to-white"
    />
  </section>
</template>
