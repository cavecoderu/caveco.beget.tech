import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export default class Main extends Component {
    render() {
        return (
			<div className="container">
				<div className="header">
					header
				</div>
				<div className="data">
					<Button variant="contained" color="primary">
						Hello World
					</Button>
				</div>
				<div className="footer">
					footer
				</div>
			</div>
        );
    }
}

if (document.getElementById('content')) {
    ReactDOM.render(<Main />, document.getElementById('content'));
}
