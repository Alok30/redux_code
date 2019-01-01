import { connect } from 'react-redux';
import ArticleList from '../components/Home';

const mapStateToProps = state => state;

export default connect( mapStateToProps )( ArticleList );