import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
        
    }

    render() {
		return (
            <div>
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                    <Table selectable={false}>
                        <TableBody displayRowCheckbox={ false }>
                            <TableRow>
                                <TableRowColumn>
                                    <TextField
                                        id="username"
                                        floatingLabelText="Username"
                                        value={this.state.username}
                                        onChange={this.handleInputChange}
                                    />
                                        <br />
                                    <TextField
                                        id="password"
                                        floatingLabelText="Password"
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