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
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // filter by showCompleted
        // .filter will return the object as long as its true, it will filter through every item in the array
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        // filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText.toLowerCase()) > -1;
        });

        // sort todos with non-completed first
        filteredTodos.sort((a, b) => {
            if (a.completed === false && b.completed === true) {
                return -1;
            }
            else if (a.completed && !b.completed) {
                return 1;
            } 
            else {
                return 0;
            }
        })

        return filteredTodos;
    }
};