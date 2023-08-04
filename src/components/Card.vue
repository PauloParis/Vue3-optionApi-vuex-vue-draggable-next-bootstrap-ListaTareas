<template>
  <div>
    <div class="card mb-3 text-black">
      <div class="card-body">
        <div class="h5 card-title">{{nombre}}</div>
        <div class="card-text" :class="prioridad == 'Urgente' ? 'text-danger' : 'text-success'"><i>{{ prioridad }}</i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['nombre', 'prioridad']
};
</script>