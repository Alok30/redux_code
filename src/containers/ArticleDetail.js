import { connect } from 'react-redux';
import ArticleDetail from '../components/ArticleDetail';

const mapStateToProps = state => state;

export default connect( mapStateToProps )( ArticleDetail );