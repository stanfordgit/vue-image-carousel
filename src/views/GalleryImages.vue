<template>
  <main>
    <div class="gallery-images">
      <div class="title">Gallery Images Lorem Picsum</div>
      <CarouselImages :images="images" />
      <SelectedImagesList />
    </div>
  </main>
</template>

<script setup>
import CarouselImages from '@/components/CarouselImages.vue';
import SelectedImagesList from '@/components/SelectedImagesList.vue';

let images = ref([]);
onMounted(() => {
  fetchImages()
})

async function fetchImages() {
  const url = 'https://picsum.photos/v2/list';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(`Error HTTP: ${response.status}`);
    }
    images.value = await response.json();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

</script>

<style lang="scss" scoped>
.gallery-images {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    margin-bottom: 10px;
    color: $color-blue;
    font-weight: 500;
  }
}
</style>