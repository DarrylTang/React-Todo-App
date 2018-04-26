var React = require('react');

var TodoApp = (props) =>{
    return(
        <div>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    <p>TodoApp.jsx</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

module.exports = TodoApp;