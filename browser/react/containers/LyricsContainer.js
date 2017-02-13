import React, {Component} from 'react';
import {connect} from 'react-redux';
import Lyrics from '../components/Lyrics';

import {searchLyrics} from '../action-creators/lyrics';

const mapStateToProps = state => {
	return {
		lyrics: state.lyrics
	}
}

const mapDispatchToProps = dispatch => {
	return {
    selectLyrics: function(artistQuery, songQuery) {
      dispatch(searchLyrics(artistQuery, songQuery))
    }
  }
}

class LyricsContainer extends Component {

  constructor() {

    super();

    this.state = {
      artistQuery: '',
      songQuery: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(type, value) {
    const stateChange = {};
    stateChange[`${type}Query`] = value;
    this.setState(stateChange);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      this.props.selectLyrics(this.state.artistQuery, this.state.songQuery);
    }
  }

  render() {
    return (
      <Lyrics
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        lyrics={this.props.lyrics} />
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LyricsContainer);
