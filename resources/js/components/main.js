import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import querystring from 'querystring';

export class MainForm extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			chatName: '',
			chatCode: '',
		};
		this.HandleChange = this.HandleChange.bind(this);
		this.HandleSubmit = this.HandleSubmit.bind(this);
	}	
		
	HandleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	
	HandleSubmit(event) {
		fetch('/open-chat', {
			method: 'POST',
			headers: {
				'X-CSRF-TOKEN': csrf_token,
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			body: querystring.stringify({
				'chatName' : this.state.chatName,
				'chatCode' : this.state.chatCode,
				'_token' : csrf_token
			})
			}).then(function (response){
				response.text().then(function(text) {
				if (text != 'false' && text != 'current exist' && text != 'not exist')
				{
					document.location.href = '/' + text
				}
				else
				{
					console.log(text);
				}
			})
		});
		event.preventDefault();
	}
	
	render() {
	  return (
		<div className="b-form">
		  <Grid container spacing={24} direction="row" justify="center">
			<Grid item xs={3}>
				<form noValidate autoComplete="off" onSubmit={this.HandleSubmit} className="b-form__form">
					<TextField
					  name="chatName"
					  label="Chat name"
					  onChange={this.HandleChange}
					  margin="normal"
					  variant="outlined"
					/><br />
					<TextField
					  name="chatCode"
					  label="Chat code"
					  onChange={this.HandleChange}
					  margin="normal"
					  variant="outlined"
					/><br />
					<div className="b-form__buttons">
						<Button name="submit" type="submit" variant="contained" color="primary" className="b-form__submit">Go</Button>	
					</div>
					<div className="b-form__links">
						<a href="/new-chat"  className="b-form__btn">Create new chat</a>
					</div>
				</form>
			</Grid>
		  </Grid>
		</div>
	  );
	}
}

export class NewForm extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			chatName: '',
			chatCode: '',
		};
		this.HandleChange = this.HandleChange.bind(this);
		this.HandleSubmit = this.HandleSubmit.bind(this);
	}	
		
	HandleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	
	HandleSubmit(event) {
		fetch('/new-chat', {
			method: 'POST',
			headers: {
				'X-CSRF-TOKEN': csrf_token,
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			body: querystring.stringify({
				'chatName' : this.state.chatName,
				'chatCode' : this.state.chatCode,
				'_token' : csrf_token
			})
			}).then(function (response){
				response.text().then(function(text) {
				if (text != 'false' && text != 'current exist' && text != 'not exist')
				{
					document.location.href = '/' + text
				}
				else
				{
					console.log(text);
				}
			})
		});
		event.preventDefault();
	}
	
	render() {
	  return (
		<div className="b-form">
		  <Grid container spacing={24} direction="row" justify="center">
			<Grid item xs={3}>
				<form noValidate autoComplete="off" onSubmit={this.HandleSubmit} className="b-form__form">
					<TextField
					  name="chatName"
					  label="Chat name"
					  onChange={this.HandleChange}
					  margin="normal"
					  variant="outlined"
					/><br />
					<TextField
					  name="chatCode"
					  label="Chat code"
					  onChange={this.HandleChange}
					  margin="normal"
					  variant="outlined"
					/><br />
					<div className="b-form__buttons">
						<Button name="submit" type="submit" variant="contained" color="primary" className="b-form__submit">Create</Button>	
					</div>
				</form>
			</Grid>
		  </Grid>
		</div>
	  );
	}
}

if (document.getElementById('main-form')) {
    ReactDOM.render(<MainForm />, document.getElementById('main-form'));
}
if (document.getElementById('new-form')) {
    ReactDOM.render(<NewForm />, document.getElementById('new-form'));
}
