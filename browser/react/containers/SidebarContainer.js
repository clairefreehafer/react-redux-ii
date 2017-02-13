import React, {Component} from 'react';
import {connect} from 'react-redux';
import Sidebar from '../components/Sidebar';

const mapStateToProps = state => {
	return {
		playlists: state.playlists.list
	}
}

class SidebarContainer extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Sidebar playlists={this.props.playlists}/>
    );
  }

}

export default connect(mapStateToProps)(SidebarContainer);
