var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;
        
        var renderTodos = () => {
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