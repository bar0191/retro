import React from 'react';

// styling
import './style.scss';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    const style = {
      paddingTop: 100,
      minHeight: 400,
      paddingLeft: 256
    };

    return (
      <div style={style}>
        Notes Page
        }
      </div>
    );
  }
}