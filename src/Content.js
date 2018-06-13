import { connect } from 'react-redux';
import { Content } from './styles/Content';

export default connect(
  state => ({
    store: state,
  }),
  dispatch => ({
  }),
)(Content);