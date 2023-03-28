import React from "react";
import { connect } from "react-redux";
import { changePageActionCreator, followActionCreator, isFeachingActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/findUsers-reducer";
import axios from "axios";
import FindUsers from "./FindUsers";
import Preloader from "../../common/Preloader/Preloader";



class UsersContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.toggleIsFeaching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUserOnPage}&page=${this.props.currentPage}`).then(response => {
			this.props.toggleIsFeaching(false);
			this.props.setUsers(response.data.items, response.data.totalCount);
		});
	}
	changeCurrentPageOnCLick = (pageNumber) => {
		this.props.toggleIsFeaching(true);
		this.props.changeCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUserOnPage}&page=${pageNumber}`).then(response => {
			this.props.toggleIsFeaching(false);
			this.props.setUsers(response.data.items, response.data.totalCount)
		});
	}
	render() {
		return (
			<>
				{this.props.isFeatching ? <Preloader /> : null}
				<FindUsers totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} changeCurrentPageOnCLick={this.changeCurrentPageOnCLick} users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow} setUsers={this.props.setUsers} />
			</>
		)
	}

}



let mapStateToProps = (state) => {
	return {
		users: state.findUsers.users,
		pageSize: state.findUsers.pageSize,
		totalUserCount: state.findUsers.totalUserCount,
		currentPage: state.findUsers.currentPage,
		countUserOnPage: state.findUsers.countUserOnPage,
		isFeatching: state.findUsers.isFeatching
	}
}

let mapDispatchToProps = {
	follow: followActionCreator,
	unfollow: unfollowActionCreator,
	setUsers: setUsersActionCreator,
	changeCurrentPage: changePageActionCreator,
	toggleIsFeaching: isFeachingActionCreator,
}



export default connect(mapStateToProps, mapDispatchToProps
)(UsersContainer);;