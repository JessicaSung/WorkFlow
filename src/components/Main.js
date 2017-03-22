import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openMenu: false,
		};
		this.handleTouchTapMenu = this.handleTouchTapMenu.bind(this);
    	this.handleRequestCloseMenu = this.handleRequestCloseMenu.bind(this);
	}

	handleTouchTapMenu(event) {
		event.preventDefault(); // This prevents ghost click.

	    this.setState({
	      openMenu: true,
	      anchorMenu: event.currentTarget,
	    });
	}

	handleRequestCloseMenu() {
		this.setState({ openMenu: false });
	}

	render() {		
		return (
			<MuiThemeProvider>
				<div>
					<AppBar
						title="WorkFlow"
						onLeftIconButtonTouchTap={this.handleTouchTapMenu}
					/>
					<Popover 
						open={this.state.openMenu}
						anchorEl={this.state.anchorMenu}
						anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
						targetOrigin={{horizontal: 'left', vertical: 'top'}}
						onRequestClose={this.handleRequestCloseMenu}
					>
						<Menu>
							<MenuItem primaryText="Home" />
							<MenuItem primaryText="Sign up" />
							<MenuItem primaryText="Sign in" />
						</Menu>
					</Popover>

					<div className="container">
						{this.props.children}
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
	
}
