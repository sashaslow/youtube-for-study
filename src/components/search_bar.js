import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from '../styles/Input';
import { asyncGetTracks } from '.././actions/videos';


const ConnectedInput = connect(state => ({
  store: state,
}))(Input);

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  render() {
    return (
      <div className="search-bar">
        <ConnectedInput
          placeholder="just type here some track name"
          value={this.state.value}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
  onInputChange(value) {
    this.setState({ value });
    this.props.onGetTracks(value);
  }
}

export default connect(
  state => ({
    store: state,
  }),
  dispatch => ({
    onGetTracks: (term) => {
      dispatch(asyncGetTracks(term));
    },
  }),
)(SearchBar);