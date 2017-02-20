import React from 'react'
import {Link, IndexLink} from 'react-router'

export default class MainMenu extends React.Component {
	render() {
		return (
			<ul className="navigation">
				<li>
					<IndexLink to="/" activeClassName="active">Home</IndexLink>
				</li>
			</ul>
		);
	}
};
