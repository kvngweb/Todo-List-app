var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
        this.nextId = 1;
    }
    TodoList.prototype.addTodo = function (task, dueDate) {
        this.todos.push({ id: this.nextId++, task: task, completed: false, dueDate: dueDate });
    };
    TodoList.prototype.completeTodo = function (id) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            todo.completed = true;
        }
        else {
            console.error("Todo with id ".concat(id, " not found."));
        }
    };
    TodoList.prototype.removeTodo = function (id) {
        var index = this.todos.findIndex(function (todo) { return todo.id === id; });
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
        else {
            console.error("Todo with id ".concat(id, " not found."));
        }
    };
    TodoList.prototype.listTodos = function () {
        return this.todos;
    };
    TodoList.prototype.filterTodos = function (completed) {
        return this.todos.filter(function (todo) { return todo.completed === completed; });
    };
    TodoList.prototype.updateTodo = function (id, newTask) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            todo.task = newTask;
        }
        else {
            console.error("Todo with id ".concat(id, " not found."));
        }
    };
    TodoList.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (todo) { return !todo.completed; });
    };
    return TodoList;
}());
// Example usage:
var todoList = new TodoList();
todoList.addTodo("Getting my International passport", new Date("2025-03-02"));
todoList.addTodo("Buying a Land", new Date("2025-02-28"));
todoList.completeTodo(1);
console.log(todoList.listTodos());
