import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (<header>
              <div className="title">Internet speed</div>
              <div className="interval">
                <span>Retest:</span>
                <input value={this.state.value} onChange={this.handleChange}/>
              </div>
            </header>);
  }
  handleChange(event) {
    console.log('interval changed to: '+event.target.value)
    if(Number.isInteger(Number(event.target.value))&&Number(event.target.value)<300){
      this.setState({value: event.target.value});
    }
  }
}


export default Header;
