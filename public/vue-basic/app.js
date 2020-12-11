Vue.component('Tasks', {
  data: function () {
    return {
      newTask: "",
      tasks: [
        { title: "Aprende Laravel", complited: true },
        { title: "Aprende VueJS", complited: true },
        { title: "Aprende PHP", complited: false }
      ]
    }
  },

  template: `
  <div>
    <h1>Lista de tareas</h1>
    <p>Tareas completas: {{complitedTasks}}</p>
    <p>Tareas incompletas: {{incomplitedTasks}}</p>
    <ul>
      <li is="Task" v-for="task in tasks" :task="task"></li>
      <li class="form-inline">
        <input @keyup.enter="addTask" class="form-control" type="text" v-model="newTask" />
      </li>
    </ul>
  </div>
  `,

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

Vue.component('Task', {
  props: ['task'],

  template: `
  <li>
    <span v-text="task.title"></span>
    <span class="check" @click="task.complited = false" v-if="task.complited">✔</span>
    <span class="check" @click="task.complited = true" v-else>❌</span>
  </li>
  `
})

const app = new Vue({
  el: "#app",
})
