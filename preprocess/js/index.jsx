/**
 * @jsx React.DOM
 */

require(["main"], function() {
    "use strict";

    require(["React"], function(React) {

        var TodoTable = React.createClass({
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
                    <table className="table table-striped todo-table">
                        <TodoTableHeader />
                        <TodoList data={this.state.data} />
                    </table>
                );
            }
        });

        var TodoTableHeader = React.createClass({
            render: function() {
                return (
                    <tr>
                        <th>Description</th>
                    </tr>
                );
            }
        });

        var TodoList = React.createClass({
            render: function() {
                var todoNodes = this.props.data.map(function(todo) {
                    return (
                        <TodoRow description={todo.description} />
                    );
                });

                return (   
                    <span>{todoNodes}</span>
                );
            }
        });

        var TodoRow = React.createClass({
            render: function() {

                return (   
                    <tr>
                    <td>{this.props.description}</td>
                    </tr>
                );
            }
        });

        React.renderComponent(
            <TodoTable />,
            document.getElementById('todo-div')
        );

    });
});
