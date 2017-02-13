import {connect} from 'react-redux';
import Stations from '../components/Stations';
import {loadAllSongs} from '../action-creators/playlists'

const convertSongsToStations = function (songsArray) {
	const stations = {};
	songsArray.forEach(song => {
		const genre = song.genre;
		stations[genre] = stations[genre] || [];
		stations[genre].push(song);
	});
	return stations;
};

const mapStateToProps = state => {
	return {
		stations: convertSongsToStations(state.playlists.songs)
	}
}

const mapDispatchToProps = dispatch => {
	return {}
}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);

export default StationsContainer;
