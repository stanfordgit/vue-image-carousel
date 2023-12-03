<template>
  <div class="carousel-images">
    <div v-if="images.length" class="carousel" ref="carousel">
      <CarouselImagesItem v-for="image in images" :key="image.id" :image-data="image" ref="carouselItem" />
    </div>
    <div class="buttons-scroll">
      <button class="buttons-scroll__prev" @click="scrollImage('prev')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m14 7-5 5m0 0 5 5" />
        </svg>
      </button>
      <button class="buttons-scroll__next" @click="scrollImage('next')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m10 17l5-5m0 0l-5-5" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import CarouselImagesItem from '@/components/CarouselImagesItem.vue';
const props = defineProps({
  images: { type: Array, required: true },
})
let carousel = ref(null);
let carouselItem = ref(null)

function scrollImage(direction) {
  carouselItem.value = document.querySelector(".carousel-images__item").offsetWidth;
  if (direction == 'prev') {
    if (carousel.value.scrollLeft == 0) {
      carousel.value.classList.add("no-transition");
      carousel.value.scrollLeft = carousel.value.scrollWidth;
      carousel.value.classList.remove("no-transition");
    }
    else {
      carousel.value.scrollLeft -= carouselItem.value;
    }
  }
  else {
    if (Math.ceil(carousel.value.scrollLeft) === carousel.value.scrollWidth - carousel.value.offsetWidth) {
      carousel.value.classList.add("no-transition");
      carousel.value.scrollLeft = 0;
      carousel.value.classList.remove("no-transition");
    }
    else {
      carousel.value.scrollLeft += carouselItem.value;
    }
  }
}

</script>

<style lang="scss" scoped>
.carousel-images {
  max-width: 1400px;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;

  @media screen and (max-width: 600px) {
    padding: 0;
  }

  .carousel {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: calc((100% / 4) - 9px);
    overflow: scroll;
    gap: 10px;
    border-radius: 8px;

    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;

    @media screen and (max-width: 1400px) {
      grid-auto-columns: calc((100% / 3) - 7px)
    }

    @media screen and (max-width: 950px) {
      grid-auto-columns: calc((100% / 2) - 5px)
    }

    @media screen and (max-width: 600px) {
      grid-auto-columns: 100%;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    &.no-transition {
      scroll-behavior: auto;
    }
  }

  .buttons-scroll {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    &__prev,
    &__next {
      width: 50px;
      height: 50px;
      background: rgba($color-light-gray, .6);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        svg path {
          stroke: $color-blue;
        }
      }

      svg {
        width: 40px;
        height: 40px;

        path {
          stroke: $color-black;
          transition: stroke 0.2s ease;
        }
      }
    }
  }
}
</style>