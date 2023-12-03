import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useSelectedImagesStore = defineStore('selectedImagesStore', {
  state: () => ({
      listSelectedImages: [],
  }),
  actions: {
    existingSelectedImage(param){
      let existingImage = this.listSelectedImages.find(i => i.id == param.id)
      if (!existingImage) {
        this.addSelectedImage(param);
      }
      else{
        this.removeSelectedImage(param);
      }
    },
    addSelectedImage(param) {
        this.listSelectedImages.push(param);
    },
    removeSelectedImage(param) {
        let existingImage = this.listSelectedImages.findIndex(i => i.id == param.id)
        if (existingImage >= 0){
          this.listSelectedImages.splice(existingImage, 1);
        }

    },
  },
})