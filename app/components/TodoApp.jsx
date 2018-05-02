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
                    text: 'Finish this application'
                },
                {
                    id: uuid(),
                    text: 'Start working on the actual codebase'
                },
                {
                    id: uuid(),
                    text: 'Go Home'
                },
                {
                    id: uuid(),
                    text: 'Watch anime movie because im a closet weeb'
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
                    text: text
                }
            ]
        })
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
                        <TodoList todos={todos}/>
                        <AddTodo todoAdd={this.handleAddTodo}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;