import React, {Component} from 'react';
import {connect} from 'react-redux';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = state => {
  console.log('state', state)
	return {
    player: state.player,
		selectedPlaylist: state.playlists.selected
	}
}

const mapDispatchToProps = dispatch => {
	return {
    toggle: function(song, list) {
      dispatch(toggleSong(song, list));
    }
  }
}

class PlaylistContainer extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Playlist
        {...this.props.player}
        selectedPlaylist={this.props.selectedPlaylist}
        toggleOne={this.props.toggle}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer);
