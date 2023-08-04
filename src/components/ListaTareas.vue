<template>
  <div>
    <div class="container-lg">
      <div class="row text-dark text-center mb-3">
        <div class="col fw-bold">Nombre</div>
        <div class="col fw-bold">Categorias</div>
        <div class="col fw-bold">Prioridad</div>
        <div class="col fw-bold estado">Estado</div>
        <div class="col fw-bold">Acción</div>
      </div>
      <div
        v-for="item in tareas"
        :key="item.id"
        class="row lista-tareas text-dark align-items-center text-center my-3"
      >
        <div class="col fw-semibold">{{ item.nombre }}</div>
        <div class="col fw-medium">{{ item.categorias.join(", ") }}</div>
        <div
          class="col fw-semibold"
          :class="item.prioridad == 'Urgente' ? 'text-danger' : 'text-success'"
        >
          {{ item.prioridad }}
        </div>
        <div class="col fw-medium estado">{{ item.estado }}</div>
        <div class="col py-2">
          <button
            @click="deleteTareas(item.id)"
            class="btn btn-delete rounded-5 mx-1 btn-sm"
          >
            <i class="fa-solid fa-trash-can fa-xl text-black"></i>
          </button>
          <RouterLink
            class="btn btn-warning rounded-5 mx-1 my-1 btn-sm"
            :to="{ name: 'editar', params: { id: item.id } }"
          >
            <i class="fa-solid fa-pen-to-square fa-xl"></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Vue3OptionApiCliVmodelCrudLocalstorageListaTareas",

  computed: {
    ...mapState(["tareas"]),
  },
  methods: {
    ...mapActions(["deleteTareas"]),
  },
};
</script>

<style scoped>
@media only screen and (max-width: 468px) {
  .estado {
    display: none;
  }
}

.btn:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}

.btn-delete {
  background-color: rgb(245, 70, 70);
}


</style>
