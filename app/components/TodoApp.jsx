var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'Addtodo';
import TodoSearch from 'TodoSearch';
// var TodoSearch = require('TodoSearch');

export class TodoApp extends React.Component{
    // Creating an initial state
    // getInitialState: function () {
    //     return {
    //         showCompleted: false,
    //         searchText: '',
    //         todos: TodoAPI.getTodos()
    //     }
    // },
    // componentDidUpdate: function () {
    //     TodoAPI.setTodos(this.state.todos);
    // },
    // handleAddTodo: function (text) {
    //     this.setState({
    //         todos: [
    //             // set current todos
    //             ...this.state.todos,
    //             // add new todo property
    //             {
    //                 id: uuid(),
    //                 text: text,
    //                 completed: false,
    //                 createdAt: moment().unix(),
    //                 completedAt: undefined
    //             }
    //         ]
    //     })
    // },
    // handleToggle: function (id) {
    //     var updatedTodos = this.state.todos.map((todo) => {
    //         if (todo.id === id) {
    //             // set the completed state to the oppsite of the state it was originally in, true to false
    //             todo.completed = !todo.completed;
    //             todo.completedAt = todo.completed ? moment().unix() : undefined
    //         }
    //         return todo;
    //     });

    //     this.setState({todos: updatedTodos});
    // },
    // handleSearch: function (showCompleted, searchText) {
    //     this.setState ({
    //         showCompleted: showCompleted,
    //         searchText: searchText.toLowerCase()
    //     })
    // },
    render() {
        // pulling the todos array state into a variable
        // var {todos, showCompleted, searchText} = this.state;
        // var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return(
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="columns medium-6 large-5 small-centered">
                        <div className="container">
                            <TodoSearch />
                            <TodoList/>
                            <AddTodo/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

module.exports = TodoApp;