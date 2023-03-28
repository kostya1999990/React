import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/28481`).then(response => {
			this.props.setUserProfile(response.data);
		})
	}
	render() {
		return <Profile {...this.props} profile={this.props.profile} />
	}
}

let mapStateToProps = (state) => {
	return ({
		profile: state.profilePage.profile
	})
}
let mapDispatchToProps = {
	setUserProfile: setUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

