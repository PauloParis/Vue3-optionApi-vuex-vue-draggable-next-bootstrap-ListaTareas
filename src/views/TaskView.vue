<template>
  <div>
    <div class="row  text-center">
      <div class="col-4 bordex py-3">
        <div class="h4 mb-5 borde fw-bold">Pendiente</div>
        
        <draggable @end="dragEnd" @dragover.prevent="dragOver('Pendiente')" v-model="pendiente" group="columnas">
          <Card
            v-for="task in pendiente"
            :key="task.id"
            @dragstart="dragStart(task.id, 'Pendiente')"
            :nombre="task.nombre"
            :prioridad="task.prioridad"
            class=""
          ></Card>
        </draggable>
      </div>
      <div class="col-4 bordex py-3">
        <div class="h4 mb-5 borde fw-bold">Haciendo</div>
      
        <draggable @end="dragEnd" @dragover.prevent="dragOver('Haciendo')" v-model="haciendo" group="columnas">
          <Card
            v-for="task in haciendo"
            :key="task.id"
            @dragstart="dragStart(task.id, 'Haciendo')"
            :nombre="task.nombre"
            :prioridad="task.prioridad"
            class=""
          ></Card>
        </draggable>
      </div>
 
      <div class="col-4 py-3">
        <div class="h4 mb-5 borde fw-bold">Terminado</div>
    
        <draggable @end="dragEnd" @dragover.prevent="dragOver('Terminada')" v-model="terminada" group="columnas">
          <Card
            v-for="task in terminada"
            :key="task.id"
            @dragstart="dragStart(task.id, 'Terminada')"
            :nombre="task.nombre"
            :prioridad="task.prioridad"
            class=""
          ></Card>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Card from "../components/Card.vue";
import { VueDraggableNext } from "vue-draggable-next";

export default {
  components: {
    draggable: VueDraggableNext,
    Card,
  },
  data() {
    return {
        pendiente: [],
        haciendo: [],
        terminada: [],
        isDragging: false, 
        draggedItemIndex: null,
        sourceColumn: "",
        endColumn: "",
        tarea: null
    }
  },
  methods: {
    ...mapActions(['updateTareaBoard']),
    dragOver(columna) {
      event.preventDefault();
      this.endColumn = columna
    },
    dragStart(index, columna) {
      this.isDragging = true;
      this.draggedItemIndex = index; // id
      this.sourceColumn = columna // estado
    },
    dragEnd() {
      localStorage.setItem("columPendiente", JSON.stringify(this.pendiente));
      localStorage.setItem("columHaciendo", JSON.stringify(this.haciendo));
      localStorage.setItem("columTerminada", JSON.stringify(this.terminada));
      this.tarea = this.tareas.find((item) => item.id == this.draggedItemIndex)
      if(this.tarea) {
        this.tarea.estado = this.endColumn
        this.updateTareaBoard(this.tarea);
      }
      this.isDragging = false;
      this.draggedItemIndex = null;
      this.buscarColumna = ""
    },
  },
  computed: {
    ...mapState(["tareas"]),
  },
  created() {
    this.pendiente = JSON.parse(localStorage.getItem('columPendiente'));
    this.haciendo = JSON.parse(localStorage.getItem('columHaciendo'));
    this.terminada = JSON.parse(localStorage.getItem('columTerminada'));
    if (this.pendiente.length > 0) {
        this.pendiente = JSON.parse(localStorage.getItem('columPendiente'));
    }
  },
};
</script>


<style scoped>

.borde {
  border-bottom: 2px solid #676bc3;
  transition: transform .5s ease;
  padding: 5px;
}

.h4 {
  color: #27566c;
}

.bordex {
  border-right: 1px solid #27566c;
}


</style>