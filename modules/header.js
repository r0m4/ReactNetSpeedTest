import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.interval};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (<header>
              <div className="title">Internet speed</div>
              <label className="interval">
                <span>Update:</span>
                <span className="input"><input value={this.state.value} onFocus={this.handleClick} onChange={this.handleChange}/></span>
              </label>
            </header>);
  }
  handleChange(event) {
    if(Number.isInteger(Number(event.target.value))&&Number(event.target.value)<300){
      if(Number(event.target.value)<1){event.target.value=1}
      if(Number(event.target.value)>300){event.target.value=300}
      this.setState({value: event.target.value});
    }
  }
  handleClick(event){
    event.target.select();
  }
}


export default Header;
