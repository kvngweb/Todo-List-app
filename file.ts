interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
}

class todoList0 {
    private todos: TodoItem[] = [];
    private nextId: number = 1;

    addTodo(task: string, dueDate: Date): void {
        this.todos.push({ id: this.nextId++, task, completed: false, dueDate });
    }

    completeTodo(id: number): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = true;
        } else {
            console.error(`Todo with id ${id} not found.`);
        }
    }

    removeTodo(id: number): void {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            this.todos.splice(index, 1);
        } else {
            console.error(`Todo with id ${id} not found.`);
        }
    }
    
    listTodos(): TodoItem[] {
        return this.todos;
    }

    filterTodos(completed: boolean): TodoItem[] {
        return this.todos.filter(todo => todo.completed === completed);
    }

    updateTodo(id: number, newTask: string): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.task = newTask;
        } else {
            console.error(`Todo with id ${id} not found.`);
        }
    }

    clearCompleted(): void {
        this.todos = this.todos.filter(todo => !todo.completed);
    }
}

// Example usage:
const todoList1 = new TodoList();
todoList.addTodo("Getting my International passport", new Date("2025-03-02"));
todoList.addTodo("Buying a Land", new Date("2025-02-28"));
todoList.completeTodo(1);
console.log(todoList.listTodos());
