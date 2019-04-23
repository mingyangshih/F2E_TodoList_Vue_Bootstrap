let app = new Vue({
  el: '#vueTodo',
  data: {
    whiteLabel: 'tasks',
    inputDetailChange: false,
    changeStar: false,
    todos: [
      {
        todoThings: 'Study English',
        date: '1992/07/19',
        hourMin: '18:00',
        comment: 'Vocabulary',
        id: 'english',
        clickDetailChange: false,
        changeStar: false,
        inputCheckDone: false
      }
    ],
    todoThings: '',
    date: '',
    hourMin: '',
    comment: ''
  },
  methods: {
    addTask: function () {
      if (this.todoThings.trim() == '') { this.inputDetailChange = false; return; }
      this.todos.push({
        todoThings: this.todoThings,
        date: this.date,
        hourMin: this.hourMin,
        comment: this.comment,
        id: Math.floor(Date.now()),
        clickDetailChange: false,
        changeStar: false,
        inputCheckDone: false
      });
      this.todoThings = "";
      this.date = "";
      this.hourMin = "";
      this.comment = "";
      this.inputDetailChange = false;
    },
    cancelEnterTask: function () {
      this.inputDetailChange = false;
    },
    clickChange: function (item, index) {
      this.todos[index].todoThings = item.todoThings;
      this.todos[index].date = item.date;
      this.todos[index].hourMin = item.hourMin;
      this.todos[index].comment = item.comment;
      this.todos[index].clickDetailChange = false;
    }
  },
  computed: {
    filterTodos: function () {
      if (this.whiteLabel == 'tasks') {
        let newTodos = [];
        this.todos.forEach(function (item, index) {
          if (item.changeStar == true) {
            newTodos.unshift(item);
          } else if (item.changeStar == false) {
            newTodos.push(item);
          }
        })
        return newTodos;
      } else if (this.whiteLabel == 'progress') {
        let newTodos = [], tentativeTodos = [];
        this.todos.forEach(function (item, index) {
          if (item.inputCheckDone == false) {
            tentativeTodos.push(item);
          }
        })
        tentativeTodos.forEach(function (item1, idx) {
          if (item1.changeStar == true) {
            newTodos.unshift(item1);
          } else if (item1.changeStar == false) {
            newTodos.push(item1);
          }
        })
        return newTodos;
      } else if (this.whiteLabel == 'completed') {
        let newTodos = [], tentativeTodos = [];
        this.todos.forEach(function (item, index) {
          if (item.inputCheckDone == true) {
            tentativeTodos.push(item);
          }
        })
        tentativeTodos.forEach(function (item1, idx) {
          if (item1.changeStar == true) {
            newTodos.unshift(item1);
          } else if (item1.changeStar == false) {
            newTodos.push(item1);
          }
        })
        return newTodos;
      }
    },
    taskLeft: function () {
      let taskLeftNum = 0;
      this.todos.forEach(function (item, idx) {

        if (item.inputCheckDone == false) {
          taskLeftNum += 1;
        }
      })
      return taskLeftNum;
    }
  }
})