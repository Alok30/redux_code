import { connect } from 'react-redux';
import SectionList from '../components/Home';
 const mapStateToProps = state => state; export default connect(mapStateToProps)(SectionList);