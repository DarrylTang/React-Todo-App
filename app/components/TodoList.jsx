var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;
        
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing to do yet, add a a task!</p>
                );
            }
            /* todos.map takes a function, and it calls that function for every element in the array,
            and whatever you return gets replaced. This acts like a foreach loop. */
            return todos.map((todo) => {
                return (
                    {/* ... is a spread operator that allows you to spread out todo objects into 
                    individual props */},
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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

module.exports = TodoList;