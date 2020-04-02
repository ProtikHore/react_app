import React, { Component } from 'react'

class AddForm extends Component {
    state = {
        name: null,
        age: null
    }
    changeFunction = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    submitFunction = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.formValue(this.state);
    }
    render() {
        return(
            <div>
                <form onSubmit={this.submitFunction}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" onChange={this.changeFunction} />
                    <label htmlFor="age">Age: </label>
                    <input type="text" id="age" name="age" onChange={this.changeFunction} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddForm