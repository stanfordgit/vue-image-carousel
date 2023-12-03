<template>
  <div class="carousel-images__item">
    <div class="button-add-selected-list" @click="toggleSelectedImageStore(imageData)"
      :class="{ 'checked': checkedImageInList }">
      <svg v-if="!checkedImageInList" class="icon" width="800" height="800" viewBox="0 0 24 24" data-name="Flat Color"
        xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor"
          d="M12 20a1 1 0 0 1-1-1v-6H5a1 1 0 0 1 0-2h6V5a1 1 0 0 1 2 0v6h6a1 1 0 0 1 0 2h-6v6a1 1 0 0 1-1 1Z" />
      </svg>
      <svg v-if="checkedImageInList" class="icon" width="800" height="800" viewBox="-5 -11 24 24"
        xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" />
      </svg>

    </div>
    <img :src="imageData.download_url" :alt="imageData.id + imageData.author" class="image">
  </div>
</template>

<script setup>
import { useSelectedImagesStore } from "@/stores/selectedImagesStore"

const props = defineProps({
  imageData: { type: Object, required: true },
})
const checkedImageInList = computed(() => {
  return selectedImages.listSelectedImages.find((val) => val.id === props.imageData.id)
});
const selectedImages = useSelectedImagesStore();

function toggleSelectedImageStore(val) {
  selectedImages.existingSelectedImage(val)
}
</script>

<style lang="scss" scoped>
.carousel-images__item {
  height: 100%;
  scroll-snap-align: start;
  list-style: none;
  cursor: pointer;
  flex-direction: column;
  position: relative;
  border-radius: 8px;

  @media screen and (max-width: 600px) {
    border-radius: 0px;
  }

  .image {
    height: 342px;
    min-width: 100%;
    border-radius: 8px;
    object-fit: cover;
    z-index: 1;

    @media screen and (max-width: 600px) {
      border-radius: 0px;
    }
  }

  .button-add-selected-list {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    margin: 10px;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: rgba($color-light-gray, .7);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    z-index: 10;
    transition: all 0.2s ease;

    .icon {
      width: 20px;
      height: 20px;

      path {
        transition: fill 0.2s ease;
        fill: $color-black;
      }

    }

    &:hover {
      .icon {
        path {
          fill: $color-green;
        }
      }
    }

    &.checked {
      background: rgba($color-light-gray, .7);

      &:hover {
        background: rgba($color-red, .7);

        .icon {
          path {
            fill: $color-white;
          }
        }
      }
    }


  }
}
</style>