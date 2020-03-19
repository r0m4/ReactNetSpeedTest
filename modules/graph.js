import React from 'react';

class Graph extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const d = this.getPath();
    return (<div className="graph">
              <svg viewBox="0 0 200 100">
                <defs>
                  <linearGradient id="IDI_8q7uc9j" x1="0" y1="0.5" x2="1" y2="0.5"><stop offset="0" stopColor="#29BCB3" stopOpacity="1"/><stop offset="1" stopColor="#11B757" stopOpacity="1"/></linearGradient>
                </defs>
                <g>
                  <path d={d} stroke="none" fill="url(#IDI_8q7uc9j)"/>
                </g>
              </svg>
            </div>);
  }
  getPath  = ()=>{
    //inner dimantions are 100x100px
    //start
    let d = "M 100 100 L 0 100 ";
    //create normalized data of speed
    let hist = JSON.parse(localStorage.getItem('history'));
    //devide width by number of data points
    let step = 100/(hist.length-1);
    //itarate
    for(var i = 0; i < hist.length; i++) {
      let x;
      if(i==0){
        x = 0;
      }else{
        x = (i*step);
      }
        let y = (100-hist[i]);
        let xa = x-step/3;
        let ya = y;
        d+="S "+ xa +" "+ ya +" "+ x +" "+ y + " ";
    }
    //finish
    d+="Z"
    return d;
  }
}


export default Graph;
