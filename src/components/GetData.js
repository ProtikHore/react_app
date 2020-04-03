import React, { Component } from 'react'
import axios from 'axios';

class GetData extends Component {
    state = {
        data: ''
    }

    // componentDidMount () {
    //     axios.get('localhost:8000/api/get/data').then(response => {
    //         console.log(response);
    //         // this.setState({
    //         //     religions: response.data
    //         // })
    //     })
    // }

    submitFunction = (e) => {
        e.preventDefault();
        console.log(this.state);
        // axios.get('localhost:8000/api/get/data').then(response => {
        //     console.log(response);
        //     this.setState({
        //         religions: response.data
        //     })
        // })
    }

    render() {
        return (
            <div className="getData">
                hello
                <form onSubmit={this.submitFunction}>
                    <label htmlFor="name">Add New List: </label>
                    <input type="text" id="name" name="name" onChange={this.changeFunction} value={this.state.content} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default GetData