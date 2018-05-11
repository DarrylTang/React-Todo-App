var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
    render: function () {
        var {todos, showCompleted, searchText} = this.props;
        
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing to do yet, add a a task!</p>
                );
            }
            /* todos.map takes a function, and it calls that function for every element in the array,
            and whatever you return gets replaced. This acts like a foreach loop. */
            return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
                return (
                    {/* ... is a spread operator that allows you to spread out todo objects into 
                    individual props */},
                    <Todo key={todo.id} {...todo} />
                );
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

// connect the store to components
module.exports = connect(
    (state) => {
        return state;
    }
)(TodoList);