<template>
    <div>
        <form @submit.prevent="updateTarea(tarea)">
            <Input :tarea="tarea"></Input>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Input from '../components/Input.vue';

export default {
    name: 'Vue3OptionApiCliVmodelCrudLocalstorageEditarView',
    components: {Input},
    computed: {
        ...mapState(['tarea'])
    },
    methods: {
        ...mapActions(['setTarea', 'updateTarea'])
    },
    created(){
        this.setTarea(this.$route.params.id)
    }
};
</script>