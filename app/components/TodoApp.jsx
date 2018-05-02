var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({
    // Creating an initial state
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Finish this application'
                },
                {
                    id: 2,
                    text: 'Start working on the actual codebase'
                },
                {
                    id: 3,
                    text: 'Go Home'
                },
                {
                    id: 4,
                    text: 'Watch anime movie because im a closet weeb'
                }
            ]
        }
    },
    render: function () {
        // pulling the todos array state into a variable
        var {todos} = this.state;

        return(
            <div>
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">
                        {/* calling the todoList component with attribute todos that contains the todos state which is
                        now known as a "prop */}
                        <TodoList todos={todos}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;