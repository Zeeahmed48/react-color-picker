import React from "react";

class Colors extends React.Component {
  render() {
    return (
      <div className="row">
      {this.props.colorNames.map((color,index) => 
          <div className="col" key={index} style={{backgroundColor:color}}>
            {color}
          </div>
        )}
      </div>
    );
  }
}

export default Colors;
