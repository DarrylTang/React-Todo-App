var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call todoAdd prop with valid data', () => {
        var todoInput = 'check mail';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo todoAdd={spy}/>)
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoInput.value = todoInput;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(todoInput);
    })

    it('should not call todoAdd prop when invalid data', () => {
        var todoInput = '';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo todoAdd={spy}/>)
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoInput.value = todoInput;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    })
});