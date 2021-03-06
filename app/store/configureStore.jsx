var redux = require('redux');
var {searchTextReducer, ShowCompletedReducer, todosReducer} = require('reducers');

export var configure = () => {
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: ShowCompletedReducer,
        todos: todosReducer
    });

    var store = redux.createStore(reducer, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))

    return store;
};

