import React from "react"
import Nav from "./Nav";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
	return {
		sidebar: state.sidebar
	}
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);