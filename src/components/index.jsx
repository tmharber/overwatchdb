import React from 'react';

import { fetchData } from './actions'

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: 'EU',
      battletag: '',
      id: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    var newState = {}
    newState[e.target.id] = e.target.value;
    this.setState(newState)
  }

  handleSubmit(e) {
    e.preventDefault();
    return fetchData({
      battletag: this.state.battletag,
      id: this.state.id,
      region: this.state.region
    }).then((response) => {
      if (response.error === 404) {
        alert("There was an error");
      }
      else {
        alert("Success!");
      }
    });
  }

  render() {
    return (
      <div className="home">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <select value={this.state.region} className="region-picker" id="region" onChange={this.handleChange}>
            <option>EU</option>
            <option>NA</option>
            <option>KR</option>
          </select>
          <div className="form-group">
            <label htmlFor="battletag-input">Battletag</label>
            <input type="text" value={this.state.battletag} className="form-control" id="battletag" placeholder="e.g.ProGenji" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="id">Battletag ID</label>
            <input type="text" value={this.state.id} className="form-control" id="id" placeholder="1234" onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-default">Search</button>
        </form>
      </div>
    );
  }
}