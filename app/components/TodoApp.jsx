var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    // Creating an initial state
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Finish this application',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Start working on the actual codebase',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Go Home',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Watch Deadpool 2',
                    completed: false
                }
            ]
        }
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                // set current todos
                ...this.state.todos,
                // add new todo property
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        })
    },
    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                // set the completed state to the oppsite of the state it was originally in, true to false
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({todos: updatedTodos});
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState ({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function () {
        // pulling the todos array state into a variable
        var {todos} = this.state;

        return(
            <div>
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">
                        <TodoSearch onSearch={this.handleSearch}/>
                        {/* calling the todoList component with attribute todos that contains the todos state which is
                        now known as a "prop */}
                        <TodoList todos={todos} onToggle={this.handleToggle}/>
                        <AddTodo todoAdd={this.handleAddTodo}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;