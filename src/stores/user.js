//aquí va a estar la lógica de las acciones que pueden hacer los usuarios. Cosas como crear, comentar, dar like, etc

import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    logged: false,
    user: {},
  }),
  actions: {},
});
