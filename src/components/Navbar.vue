<template>
  <div class="navbar navbar-dark fixed-top bg-dark mb-4">
    <div class="container-lg">
      <RouterLink 
          :to="{'name': 'home'}" 
          class="navbar-brand btn btn-dark m-0"
          :class="{'active-link': isCurrentRoute('home')}">
          Tareas
      </RouterLink>
      <div class="d-flex">
        <RouterLink 
          :to="{'name': 'tablero'}" 
          class="btn btn-dark m-0"
          :class="{'active-link': isCurrentRoute('tablero')}"> 
          Tablero 
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentRouteName: '',
    }
  },
  methods: {
    // Función para verificar si la ruta actual coincide con la ruta dada
    isCurrentRoute(routeName) {
      return this.currentRouteName === routeName;
    },
  },
  created() {
    // Actualizar el valor de currentRouteName cuando la ruta cambia
    this.currentRouteName = this.$route.name;

    // Escuchar los cambios de ruta y actualizar currentRouteName
    this.unwatch = this.$router.afterEach((to, from) => {
      this.currentRouteName = to.name;
    }); 
  },
  beforeDestroy() {
    // Detener la escucha de cambios de ruta cuando el componente se destruye
    this.unwatch(); 
  },
};
</script>

<style scoped>

a {
  border: 1px solid #676bc3;
}
a:hover {
  background-color: #676bc3;
}
.active-link {
  background-color: #676bc3;
}
</style>
