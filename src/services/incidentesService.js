import React from 'react';

class IncidentesService extends React.Component {
  state = {
    name: '',
  }

  setName = event => {
    this.setState({ id: event.target.value });
  }
 
  create(event) {
    event.preventDefault();
    console.log(this.state)
  }

}

export default new IncidentesService();