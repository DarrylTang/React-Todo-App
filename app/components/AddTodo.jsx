var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');


export var AddTodo = React.createClass({
    onSubmit: function (e) {
        // this will prevent the current page from refereshing when the form is submitted
        e.preventDefault();
        var {dispatch} = this.props;
        var todo = this.refs.todoInput.value;

        if (todo.length > 0) {
            this.refs.todoInput.value = "";
            // add a prop called todoAdd passing in todo input
            // this.props.todoAdd(todo);
            dispatch(actions.addTodo(todo));
        } else {
            this.refs.todoInput.focus();
        }
    },
    render: function () {
        return (
            <div className="container__footer">
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="todoInput" placeholder="eg. Feed the dog"/>
                    <button className="button expanded">Add Task</button>
                </form>
            </div>
        )
    }
});

export default connect()(AddTodo);