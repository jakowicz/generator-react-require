/**
 * @jsx React.DOM
 */

require(["../main"], function() {
    "use strict";

    require(["React", "jquery"], function(React, $) {

        var SERVER = "http://127.0.0.1:1337/";

        /**
         * Create a tble to store the todo list
         */
        var TodoTable = React.createClass({

            TODO_LIST_PROP: "todoList",

            /**
             * Get all todo descriptions from the server
             */
            loadTodoFromServer: function() {
                $.ajax({
                    url: this.props.readUrl,
                    dataType: 'json',
                    success: function(data) {
                        this.setTodoState(data);
                    }.bind(this),
                    error: function(xhr, status, err) {
                        console.error(err.toString());
                    }.bind(this)
                });
            },

            /**
             * Submit a new todo to the server
             * @param {String} newTodoDescription
             */
            handleCommentSubmit: function(newTodoDescription) {
                
                this.addNewTodo(newTodoDescription);

                $.ajax({
                    url: this.props.writeUrl,
                    type: 'POST',
                    data: { description: newTodoDescription },
                    error: function(xhr, status, err) {
                        console.error(err.toString());
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
             * Create an object to set into the "todo" state
             * @param {Array} data - An array of todo objects
             */
            createTodoObject: function(data) {
                var todoList = {};
                todoList[this.TODO_LIST_PROP] = data;
                return todoList;
            },

            /**
             * Update the state of 'todoList'
             * @param {Array} data - An array of todo objects
             */
            setTodoState: function(data) {
                this.setState(this.createTodoObject(data));
            },

            /**
             * Add a new todo
             * @param {String} newTodoDescription
             */
            addNewTodo: function(newTodoDescription) {
                console.log(this.getTodoState());
                var todoList = this.getTodoState().concat({ "description" : newTodoDescription });
                this.setTodoState(todoList);
            },

            /**
             * Set the initial state of teh todo list
             */
            getInitialState: function() {
                return this.createTodoObject([]);
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
                    });
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
                    <table className="table table-striped todo-table">
                        <thead>
                            <tr><th>Description</th></tr>
                        </thead>
                        <TodoList todoList={this.state.todoList} />
                    </table>
                );
            }
        });

        /**
         * Create the todo list tbody data
         */
        var TodoList = React.createClass({
            render: function() {

                var todoNodes = this.props.todoList.map(function(todo) {
                    return (<TodoRow description={todo.description} />);
                });

                return ( 
                    <tbody>{todoNodes}</tbody>
                );
            }
        });

        /**
         * Create a new row for the todo list
         */
        var TodoRow = React.createClass({
            render: function() {
                return (   
                    <tr><td>{this.props.description}</td></tr>
                );
            }
        });

        React.renderComponent(<TodoTable readUrl="js/server/json/todo.json" writeUrl={SERVER} />, document.getElementById('todo-div'));

    });
});
