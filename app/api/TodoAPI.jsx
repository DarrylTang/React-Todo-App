var $ = require('jquery');

module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            // stringify converts the array into a string
            localStorage.setItem('todos', JSON.stringify(todos));  
            return todos;          
        }
    },
    getTodos: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            // converts string back into array
            todos = JSON.parse(stringTodos);
        } catch (e) {

        }

        // if ($.isArray(todos)) {
        //     return todos;
        // } else {
        //     return [];
        // }

        return $.isArray(todos) ? todos : [];
    }
};