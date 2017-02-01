import React from 'react';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("Thanks!");
  }

  render() {
    debugger;
    return (
      <div className="home">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <select className="region-picker" defaultValue="EU">
            <option>EU</option>
            <option>NA</option>
            <option>KR</option>
          </select>
          <div className="form-group">
            <label htmlFor="battletag-input">Battletag</label>
            <input type="text" className="form-control" id="battletag-input" placeholder="e.g.ProGenji" />
          </div>
          <div className="form-group">
            <label htmlFor="battletag-id-input">Battletag ID</label>
            <input type="email" className="form-control" id="battletag-id-input" placeholder="1234" />
          </div>
          <button type="submit" className="btn btn-default">Search</button>
        </form>
      </div>
    );
  }
}