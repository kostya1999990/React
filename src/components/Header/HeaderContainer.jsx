import s from './Header.module.css';
import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import Header from './Header';
import { setUser } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", { withCredentials: true }).then(response => {
			if (response.data.resultCode === 0) {
				return this.props.setUser(response.data.data)
			}
		})
	}
	render() {
		return <Header {...this.props} />
	}
}

let mapStateToProps = (state) => {
	return ({
		data: state.auth.data
	})
}
let mapDispatchToProps = {
	setUser: setUser
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);