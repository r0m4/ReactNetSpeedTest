import React from 'react';

class Indicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {speed: this.props.speed,unit: this.props.unit};
    //onClick={(event) => {this.setState({speed: this.state.speed+100})}}
  }
  render() {
    const speed = this.props.speed;
    return (<div className="speedIndicator">
              <div>
              <span className="speedNumber">{speed}</span>
              <span className="speedUnit">{this.state.unit}</span>
              </div>
            </div>);
  }
}


export default Indicator;
