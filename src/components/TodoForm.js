import React, { Component } from 'react'

class TodoForm extends Component {
    state = {
        content: ''
    }
    changeFunction = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    submitFunction = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return(
            <div>
                <form onSubmit={this.submitFunction}>
                    <label htmlFor="name">Add New List: </label>
                    <input type="text" id="name" name="name" onChange={this.changeFunction} value={this.state.content} />
                    <button>Submit</button>
                </form>
                {/* <form onSubmit={this.submitFunction}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="name">Add New List: </label>
                            <input className="form-control" type="text" id="name" name="name" onChange={this.changeFunction} value={this.state.content} />
                        </div>
                    </div>
                </form> */}
            </div>
        )
    }
}

export default TodoForm