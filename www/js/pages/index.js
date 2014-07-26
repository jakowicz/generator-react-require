/**
 * @jsx React.DOM
 */

require(["../main"], function() {
    "use strict";

    require(["React", "jquery"], function(React, $) {

        /**
         * Create a tble to store the todo list
         */
        var TodoTable = React.createClass({displayName: 'TodoTable',

            /**
             * Get all todo descriptions from the server
             */
            loadTodoFromServer: function() {
                $.ajax({
                    url: this.props.url,
                    dataType: 'json',
                    success: function(data) {
                        console.log(data);
                        this.setState({todoList: data});
                    }.bind(this),
                    error: function(xhr, status, err) {
                        console.error(this.props.url, status, err.toString());
                    }.bind(this)
                });
            },

            /**
             * Get the current state of 'todoList'
             * @return {Object}
             */
            getTodoState: function() {
                return this.state.todoList;
            },

            /**
             * Update the state of 'todoList'
             * @param {Array} data - An array of todo objects
             */
            setTodoState: function(data) {
                this.setState({todoList: data});
            },

            /**
             * Add a new todo
             * @param {String} newTodoDescription
             */
            addNewTodo: function(newTodoDescription) {
                var todoList = this.getTodoState();
                var todoList = todoList.concat({ "description" : newTodoDescription });
                this.setTodoState(todoList);
            },

            /**
             * Submit a new todo to the server
             * @param {String} newTodoDescription
             */
            handleCommentSubmit: function(newTodoDescription) {
                
                this.addNewTodo(newTodoDescription);

                // $.ajax({
                //     url: this.props.url,
                //     dataType: 'json',
                //     type: 'POST',
                //     data: comment,
                //     success: function(data) {
                //         //this.setState({data: data});
                //     }.bind(this),
                //     error: function(xhr, status, err) {
                //         console.error(this.props.url, status, err.toString());
                //     }.bind(this)
                // });
            },

            /**
             * Set the initial state of teh todo list
             */
            getInitialState: function() {
              return { todoList: [] };
            },

            /**
             * This method should be called when the table is first rendered
             */
            componentDidMount: function() {

                var reactThis = this;
                $(function() {
                    $("form").on("submit", function(e) {
                        reactThis.handleCommentSubmit($("#todo-description").val());
                        return false;
                    })
                });

                this.loadTodoFromServer();
                setInterval(this.loadTodoFromServer, 2000);
            },

            /**
             * Render the table, each time the state is changed
             */
            render: function() {

                var reactThis = this;

                return (
                    React.DOM.table({className: "table table-striped todo-table"}, 
                        React.DOM.thead(null, 
                            React.DOM.tr(null, React.DOM.th(null, "Description"))
                        ), 
                        TodoList({todoList: this.state.todoList})
                    )
                );
            }
        });

        /**
         * Create the todo list tbody data
         */
        var TodoList = React.createClass({displayName: 'TodoList',
            render: function() {

                var todoNodes = this.props.todoList.map(function(todo) {
                    return (TodoRow({description: todo.description}));
                });

                return ( 
                    React.DOM.tbody(null, todoNodes)
                );
            }
        });

        /**
         * Create a new row for the todo list
         */
        var TodoRow = React.createClass({displayName: 'TodoRow',
            render: function() {

                return (   
                    React.DOM.tr(null, React.DOM.td(null, this.props.description))
                );
            }
        });

        React.renderComponent(TodoTable({url: "js/json/todo.json"}), document.getElementById('todo-div'));

    });
});
