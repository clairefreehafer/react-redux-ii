import React, {Component} from 'react';
import {connect} from 'react-redux';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  return {
    selectedAlbum: state.albums.selected,
    currentSong: state.player.currentsong,
    isPlaying: state.player.isPlaying
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);

/*
export default class extends Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  toggle(song, list) {
    store.dispatch(toggleSong(song, list));
  }

  render() {
    return <Album
      selectedAlbum={this.state.albums.selected}
      currentSong={this.state.player.currentSong}
      isPlaying={this.state.player.isPlaying}
      toggleOne={this.toggle}
    />;
  }

}
*/
