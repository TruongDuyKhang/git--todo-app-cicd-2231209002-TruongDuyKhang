const { TodoService } = require('../../js/model');

describe('TodoService Unit Tests', () => {
    let service;

    beforeEach(() => {
        // Create a new service instance for each test to ensure isolation
        service = new TodoService();
        // This is a bit of a hack to reset the singleton for testing purposes
        service.todos = [];
    });

    test('should add a new todo', () => {
        // TODO: Call the addTodo method with some text.
        // Then, assert that the service's todos array has a length of 1.
        // Assert that the text of the first todo matches the input text.
        const text = 'Buy milk';
        service.addTodo(text);
        expect(service.getTodos()).toHaveLength(1);
        expect(service.getTodos()[0].text).toBe(text);
        expect(service.getTodos()[0].completed).toBe(false);    

    });

    test('should toggle the completed state of a todo', () => {
        // TODO: First, add a todo.
        // Then, get its ID and call the toggleTodoComplete method.
        // Assert that the 'completed' property of that todo is now true.
        // Call toggleTodoComplete again and assert that it's false.
        service.addTodo('Walk the dog');
        const todoId = service.getTodos()[0];
        const id = todoId.id;

        service.toggleTodoComplete(id);

        const toggledTodo = service.getTodos().find(todo => todo.id === id);
        expect(toggledTodo.completed).toBeTruthy();

        service.toggleTodoComplete(id);
        const toggledAgainTodo = service.getTodos().find(todo => todo.id === id);
        expect(toggledAgainTodo.completed).toBeFalsy();


    });

    test('should remove a todo', () => {
        // TODO: Add a todo.
        // Get its ID and call the removeTodo method.
        // Assert that the service's todos array is now empty (length of 0).
        service.addTodo('Read a book');
        const todoId = service.getTodos()[0];
        const id = todoId.id;
        expect(service.getTodos()).toHaveLength(1);

        service.removeTodo(id);

        expect(service.getTodos()).toHaveLength(0);
    });

    test('should not add a todo if text is empty', () => {
        // TODO: Call addTodo with an empty string.
        // Assert that the todos array still has a length of 0.
        const emptyText = '';
        service.addTodo(emptyText);
        expect(service.getTodos()).toHaveLength(0);
    });
});
