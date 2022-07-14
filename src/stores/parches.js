import { defineStore } from "pinia";
// import axios from "axios";
//import { ref } from "vue";

export const useParchesStore = defineStore({
  id: "parches",
  state: () => ({
    parches: [],
  }),
  getters: {
    getParches(state) {
      return state.parches;
    },
  },
  actions: {
    async fetchParches() {
      const data = await fetch(
        "http://localhost:3000/src/mock/parches.json"
      ).then((res) => res.json());

      this.parches = data;
    },
  },
});
