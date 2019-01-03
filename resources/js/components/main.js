import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export class Application extends Component {
	
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
			body: 
				'chatName='+encodeURIComponent(this.state.chatName)+
				'&chatCode='+encodeURIComponent(this.state.chatCode)+
				'&_token='+csrf_token
			}).then(function (response){
				response.text().then(function(text) {
				console.log(text);
			})
		});
		event.preventDefault();
	}
	
	render() {
	  return (
		<div>
		  <Grid container spacing={24}>
			<Grid item xs={12}>
				<form noValidate autoComplete="off" onSubmit={this.HandleSubmit}>
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
					<Button name="submit" type="submit" variant="contained" color="primary">
						Hello World
					</Button>	
				</form>
			</Grid>
		  </Grid>
		</div>
	  );
	}
}

if (document.getElementById('content')) {
    ReactDOM.render(<Application />, document.getElementById('content'));
}
