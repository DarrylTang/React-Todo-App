var React = require('react');

var AddTodo = React.createClass({
    onSubmit: function (e) {
        // this will prevent the current page from refereshing when the form is submitted
        e.preventDefault();
        var todo = this.refs.todoInput.value;

        if (todo.length > 0) {
            this.refs.todoInput.value = "";
            // add a prop called todoAdd passing in todo input
            this.props.todoAdd(todo);
        } else {
            this.refs.todoInput.focus();
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="todoInput" placeholder="eg. Feed the dog"/>
                    <button className="button expanded">Add Task</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;