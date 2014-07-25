/**
 * @jsx React.DOM
 */

require(["main"], function() {
    "use strict";

    require(["React"], function(React) {

        var TodoTable = React.createClass({displayName: 'TodoTable',
            loadCommentsFromServer: function() {
                // $.ajax({
                //     url: this.props.url,
                //     dataType: 'json',
                //     success: function(data) {
                //         this.setState({data: data});
                //     }.bind(this),
                //     error: function(xhr, status, err) {
                //         console.error(this.props.url, status, err.toString());
                //     }.bind(this)
                // });
            },
            handleCommentSubmit: function(comment) {
                var comments = this.state.data;
                var newComments = comments.concat([comment]);
                this.setState({data: newComments});

                $.ajax({
                    url: this.props.url,
                    dataType: 'json',
                    type: 'POST',
                    data: comment,
                    success: function(data) {
                        //this.setState({data: data});
                    }.bind(this),
                    error: function(xhr, status, err) {
                        console.error(this.props.url, status, err.toString());
                    }.bind(this)
                });

                this.setState({ todo: [3123123132123, 45345345345, 245234523452345] })
            },
            getInitialState: function() {
              return { data: [{ "description": "Finish off this Jazz" }, { "description": "Celebrate" }] };
            },
            componentDidMount: function() {
                // this.loadCommentsFromServer();
                // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
            },
            render: function() {
                return (
                    React.DOM.table({className: "table table-striped todo-table"}, 
                        TodoTableHeader(null), 
                        TodoList({data: this.state.data})
                    )
                );
            }
        });

        var TodoTableHeader = React.createClass({displayName: 'TodoTableHeader',
            render: function() {
                return (
                    React.DOM.tr(null, 
                        React.DOM.th(null, "Description")
                    )
                );
            }
        });

        var TodoList = React.createClass({displayName: 'TodoList',
            render: function() {
                var todoNodes = this.props.data.map(function(todo) {
                    return (
                        TodoRow({description: todo.description})
                    );
                });

                return (   
                    React.DOM.span(null, todoNodes)
                );
            }
        });

        var TodoRow = React.createClass({displayName: 'TodoRow',
            render: function() {

                return (   
                    React.DOM.tr(null, 
                    React.DOM.td(null, this.props.description)
                    )
                );
            }
        });

        React.renderComponent(
            TodoTable(null),
            document.getElementById('todo-div')
        );

    });
});
