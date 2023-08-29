import { createStore } from "vuex";
import router from "../router/index.js";



function actualizar (payload) {
    const estadoMap = {
        Pendiente: "columPendiente",
        Haciendo: "columHaciendo",
        Terminada: "columTerminada",
      };
      const estado = payload.estado;
      let items = JSON.parse(localStorage.getItem(estadoMap[estado])) || [];
      const index = items.findIndex((item) => item.id === payload.id); // busco el elemento dentro del array
      if (index !== -1) {
        items[index] = payload;
      }
      localStorage.setItem(estadoMap[estado], JSON.stringify(items));
}


export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: "",
      nombre: "",
      categorias: [],
      prioridad: "",
      estado: "Pendiente",
    },
  },
  mutations: {
    cargar(state, payload) {
        state.tareas = payload;
    },
    set(state, payload) {
        state.tareas.push(payload);
        localStorage.setItem("tareas", JSON.stringify(state.tareas));

        let pendientes = JSON.parse(localStorage.getItem("columPendiente"));
        pendientes.push(payload);
        localStorage.setItem("columPendiente", JSON.stringify(pendientes));
    },
    eliminar(state, payload) {
        const estados = ["columPendiente", "columHaciendo", "columTerminada"];
        for (let estado of estados) {
            let items = JSON.parse(localStorage.getItem(estado) || []);
            const index = items.findIndex((item) => item.id == payload);
            if (index !== -1) {
            items.splice(index, 1); // se elimina el elementos
            localStorage.setItem(estado, JSON.stringify(items));
            break;
            }
        }
        state.tareas = state.tareas.filter((item) => item.id !== payload);
        localStorage.setItem("tareas", JSON.stringify(state.tareas));
    },
    tarea(state, payload) {
      if ( !state.tareas.map((item) => (item.id === payload.id ? payload : item))) {
            router.push("/");
            return;
      }
        state.tarea = state.tareas.find((item) => item.id === payload);
    },
    update(state, payload) {
        actualizar(payload)
        state.tareas = state.tareas.map((item) =>
            item.id === payload.id ? payload : item
        );
        localStorage.setItem("tareas", JSON.stringify(state.tareas));
        router.push("/");
    },
    updateBoard(state, payload) {
      actualizar(payload)
      state.tareas = state.tareas.map((item) =>
            item.id === payload.id ? payload : item
        );
        localStorage.setItem("tareas", JSON.stringify(state.tareas));
    }
  },
  actions: {
        cargarLocalStorage({ commit }) {
        if (localStorage.getItem("tareas")) {
            const tareas = JSON.parse(localStorage.getItem("tareas"));
            commit("cargar", tareas);
            return;
        }
        localStorage.setItem("tareas", JSON.stringify([]));
        localStorage.setItem("columPendiente", JSON.stringify([]));
        localStorage.setItem("columHaciendo", JSON.stringify([]));
        localStorage.setItem("columTerminada", JSON.stringify([]));
        },
        setTareas({ commit }, tarea) {
            commit("set", tarea);
        },
        deleteTareas({ commit }, id) {
            commit("eliminar", id);
        },
        setTarea({ commit }, id) {
            commit("tarea", id);
        },
        updateTarea({ commit }, tarea) {
            commit("update", tarea);
        },
        updateTareaBoard({ commit }, tarea) {
          commit("updateBoard", tarea);  
        },
  },
});
