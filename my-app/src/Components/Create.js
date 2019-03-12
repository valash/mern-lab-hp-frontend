import React, { Component } from 'react';

class Create extends Component {
    render() {
        return (
            <div className="CreateChar">
                <h1>Add a new Character!</h1>
                <form onSubmit={this.props.addCharacter}>
                    <p>Name</p>
                    <input type="text" name="name" onChange={this.props.changeHandler} />
                    <p>Gender</p>
                    <input type="text" name="gender" onChange={this.props.changeHandler} />
                    <p>House</p>
                    <input type="text" name="house" onChange={this.props.changeHandler} />
                    <p>Blood Status</p>
                    <input type="text" name="bloodStatus" onChange={this.props.changeHandler} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Create;
