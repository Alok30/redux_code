import { connect } from 'react-redux';
// when a component does not get loaded via <Route> tag (eg. <App /> gets included directly in index.js, but not using a <Route path="..." component={App}), then withROuter() is used to wrap the component - this way it will get match, location and history in props
import { withRouter } from 'react-router-dom';
import Home from '../components/Home';
const mapStateToProps = state => state;
export default withRouter(connect(mapStateToProps)(Home));
