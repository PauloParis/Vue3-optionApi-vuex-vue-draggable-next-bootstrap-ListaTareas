<template>
  <main>
    <form @submit.prevent="procesarFormulario">
    <Input :tarea="tarea"></Input>
    </form>
    <hr>
    <br>
    <ListaTareas></ListaTareas>
  </main>
</template>


<script>
import { mapActions } from 'vuex'
import Input from '../components/Input.vue'
import ListaTareas from '../components/ListaTareas.vue'
import  shortid from 'shortid'

export default {

  components: {
    Input, ListaTareas
  },
  data(){
    return {
      tarea: {
        id: '',
        nombre: '',
        categorias: [],
        prioridad: '',
        estado: 'Pendiente',
      }
    }
  },
  methods: {
    ...mapActions(['setTareas', 'setFila1']),
    procesarFormulario(){
      //generar id
      this.tarea.id = shortid.generate();
      //enviar los datos
      this.setTareas(this.tarea);
      //limpiar datos
      this.tarea = {
        id: '',
        nombre: '',
        categorias: [],
        prioridad: '',
        estado: 'Pendiente',
      }
    }
  },
}

</script>