<template>
  <iframe
    :src="embedUrl"
    width="100%"
    :height="height"
    style="border: 0"
    allowfullscreen="true"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    :class="containerClass"
  />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    latitude?: number;
    longitude?: number;
    zoom?: number;
    height?: string;
    containerClass?: string;
  }>(),
  {
    latitude: 52.5820225,
    longitude: 6.6454092,
    zoom: 15,
    height: "400",
    containerClass: "rounded-xl",
  }
);

const embedUrl = computed(() => {
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2404.8!2d${props.longitude}!3d${props.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c801e01f49b3e5%3A0x2c83f9de141d21c2!2sCaf%C3%A9%20%26%20Zalencentrum%20Mulder!5e0!3m2!1snl!2snl!4v1640995200000!5m2!1snl!2snl&z=${props.zoom}`;
});
</script>
