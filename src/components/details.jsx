import React from 'react';

export default class DetailsPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          Args = {args}
        </div>
        <div>
          Data = {data}
        </div>
      </div>
    )
  }

  mapStateToProps(state) {
    return {
      data: state.data,
      args: state.args
    };
  }
}