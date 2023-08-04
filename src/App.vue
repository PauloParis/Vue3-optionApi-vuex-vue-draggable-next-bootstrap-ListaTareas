<template>
  <Navbar></Navbar>

  <div class="container-lg">
    <RouterView />
  </div>
  
</template>

<script>
import { mapActions } from 'vuex';
import Navbar from './components/Navbar.vue';


export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['cargarLocalStorage'])
  },
  created(){
    this.cargarLocalStorage();
  }
}

</script>

<style scoped>

.container-lg {
  margin-top: 5rem;
}

</style>
