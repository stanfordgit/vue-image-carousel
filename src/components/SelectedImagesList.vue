<template>
  <div class="selected-images-list">
    <div class="title">List selected images:</div>
    <ul class="list" v-if="selectedImages.listSelectedImages.length">
      <transition-group name="fade" tag="ul">
        <li class="list__item" v-for="images in selectedImages.listSelectedImages" :key="images.id">{{
          images.download_url }}
        </li>
      </transition-group>
    </ul>
    <div v-else class="list-empty">Marked pictures are missing!</div>
  </div>
</template>

<script setup>
import { useSelectedImagesStore } from "@/stores/selectedImagesStore"
const selectedImages = useSelectedImagesStore();

</script>

<style lang="scss" scoped>
.selected-images-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  margin-top: 20px;

  .title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .list {
    max-height: 270px;
    overflow: auto;

    .list__item {
      padding: 8px;
      border-bottom: 1px solid $color-light-gray;

      &:nth-child(even) {
        background: $color-light-blue;
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }


}

.list-empty {
  color: $color-red;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>