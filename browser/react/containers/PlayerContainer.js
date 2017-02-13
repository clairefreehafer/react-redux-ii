import React, {Component} from 'react';
import AUDIO from '../audio';
import {connect} from 'react-redux';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';

const mapStateToProps = state => {
	return {
		player: state.player
	}
}

const mapDispatchToProps = dispatch => {
	return {
    next: function () {
      dispatch(next());
    },
    prev: function () {
      dispatch(previous());
    },
    toggle: function (currentSong, currentSongList) {
      dispatch(
        toggleSong(currentSong, currentSongList)
      );
    },
    getProgress: function (current, length) {
      dispatch(setProgress(current / length))
    }
  }
}

class PlayerContainer extends Component {

  constructor() {
    super();
  }

  componentDidMount () {
    AUDIO.addEventListener('ended', this.next);
    AUDIO.addEventListener('timeupdate', () => {
      this.props.getProgress(AUDIO.currentTime, AUDIO.duration)
    });
  }

  render() {
    return <Player
      isPlaying={this.props.player.isPlaying}
      progress={this.props.player.progress}
      currentSong={this.props.player.currentSong}
      currentSongList={this.props.player.currentSongList}
      next={this.props.next}
      prev={this.props.prev}
      toggle={this.props.toggle}
    />;
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
