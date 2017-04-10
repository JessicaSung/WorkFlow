import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            username: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post('/api/user/register', {
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }).then((response) => {
            console.log('Saved successfully to database.');
        }).catch((err) => {
            console.error(err);
        });
    }

    render() {
		return (
            <div>
                <h3>Create your account</h3>
                <form onSubmit={this.handleSubmit}>
                    <Table selectable={false}>
                        <TableBody displayRowCheckbox={ false }>
                            <TableRow>
                                <TableRowColumn>
                                    <TextField
                                        id="name"
                                        floatingLabelText="Name"
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                    />
                                        <br />
                                    <TextField
                                        id="email"
                                        floatingLabelText="Email address"
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                    />
                                        <br />
                                    <TextField
                                        id="username"
                                        floatingLabelText="Choose your username"
                                        value={this.state.username}
                                        onChange={this.handleInputChange}
                                    />
                                        <br />
                                    <TextField
                                        id="password"
                                        floatingLabelText="Create a password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                    />
                                        <br /> <br />
                                    <RaisedButton 
                                        type="submit"
                                        label="Submit"	
                                        primary={true} 
                                    />
                                </TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </form>                                                                 
            </div>
        );
	}
}