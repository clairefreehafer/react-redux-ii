'use strict';

import React from 'react';
import AddSong from '../components/AddSong';
import {connect} from 'react-redux';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    songs: state.playlists.songs,
    selectedPlaylist: state.playlists.selected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSong: function (playlistId, songId) {
      dispatch(addSongToPlaylist(playlistId, songId))
    }
  }
}

class AddSongContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songId: 1,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  handleSubmit(evt) {

    evt.preventDefault();

    const playlistId = this.props.selectedPlaylist.id;
    const songId = this.state.songId;
    console.log('handle submit', playlistId, songId)
    // store.dispatch(addSongToPlaylist(playlistId, songId));
    this.props.addSong(playlistId, songId);

  }

  render() {
    const songs = this.props.songs;
    const error = this.state.error;

    return (
      <AddSong
        {...this.props}
        songs={songs}
        error={error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSongContainer);
