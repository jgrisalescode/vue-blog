Vue.component('User', {
  props: ['name', 'lastName'],

  data: function () {
    return {
      app: {
        name: 'Aprendible'
      }
    }
  },

  template: `<div>
    <h1>Usuario de: {{app.name}}</h1>
    <h2>Nombre: {{name}} {{lastName}}</h2>
    <input v-model="name"/>
    <input v-model="app.name"/>
  </div>`
})

const app = new Vue({
  el: "#app",

  data: {
    newTask: "",
    tasks: [
      { title: "Aprende Laravel", complited: true },
      { title: "Aprende VueJS", complited: true },
      { title: "Aprende PHP", complited: false }
    ]
  },
  computed: {
    complitedTasks: function () {
      return this.tasks.filter(function (task) {
        if (task.complited) {
          return task
        }
      }).length
    },

    incomplitedTasks: function () {
      return this.tasks.filter(function (task) {
        if (!task.complited) {
          return task
        }
      }).length
    }
  },
  methods: {
    addTask: function () {
      if (this.newTask.length <= 1) return alert("La tarea no puede estar vacía")
      this.tasks.push({
        title: this.newTask,
        complited: false
      })
      this.newTask = ""
    }
  }
})
