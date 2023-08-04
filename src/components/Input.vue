<template>
  <!-- input nombre -->
  <div class="form">
    <input
    type="text"
    class="form-control my-2"
    placeholder="Ingrese Nombre Tarea"
    v-model.trim="tarea.nombre"
  />
  </div>
  
  <h6 class="my-3">Categorias</h6>
  <!-- checkbox -->
  <div class="form form-check form-check-inline">
    <input
      type="checkbox"
      id="check-1"
      class="form-check-input"
      v-model="tarea.categorias"
      value="Trabajo"
    />
    <label for="check-1" class="form-check-label text-black">Trabajo</label>
  </div>
  <div class="form form-check form-check-inline">
    <input
      type="checkbox"
      id="check-2"
      class="form-check-input"
      v-model="tarea.categorias"
      value="Casa"
    />
    <label for="check-2" class="form-check-label text-black">Casa</label>
  </div>
  <div class="form form-check form-check-inline">
    <input
      type="checkbox"
      id="check-2"
      class="form-check-input"
      v-model="tarea.categorias"
      value="Estudio"
    />
    <label for="check-2" class="form-check-label text-black">Estudio</label>
  </div>
  <h6 class="my-3">Prioridad</h6>
  <!-- radiobuttom -->
  <div class="mt-2">
    <div class="form form-check form-check-inline">
      <input
        type="radio"
        id="radio-1"
        class="form-check-input"
        v-model="tarea.prioridad"
        value="Urgente"
      />
      <label for="radio-1" class="form-check-label text-black">Urgente</label>
    </div>
  </div>
  <div class="mt-2">
    <div class="form form-check form-check-inline">
      <input
        type="radio"
        id="radio-2"
        class="form-check-input"
        v-model="tarea.prioridad"
        value="Relajado"
      />
      <label for="radio-2" class="form-check-label text-black">Relajado</label>
    </div>
  </div>
  <button class="mt-4 btn btn-primary w-100" :disabled="bloquear">Procesar</button>
</template>

<script>
export default {
  props: {
    tarea: Object,
  },
  computed: {
    bloquear() {
      return this.tarea.nombre.trim() === "" ? true : false;
    },
  },
};
</script>


<style scoped>


h6 {
  color: #27566c; /* #27566c */ 
  font-size: 1.5rem;
}



</style>