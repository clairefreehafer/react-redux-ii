import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils';

const selectStation = function (stations) {

}

const mapStateToProps = (state, ownProps) => {
	return {
		genreName: ownProps.params.genreName,
		songs: state.playlists.songs
			.filter(song => song.genre === ownProps.params.genreName)
			.map(convertSong),
		currentSong: state.player.currentSong,
		isPlaying: state.player.isPlaying
	};
}

const mapDispatchToProps = dispatch => {
	return {}
}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);

export default StationContainer;
