import React from 'react'
import './Label.css'

class Label extends React.Component {
  render() {
    const props = this.props;
    const style = props.isActive ? {background: 'green'} : {background:'orange'}
    return (
    <span 
    onClick={() => { 
      props.onAction(props.isActive ? 'active' : 'nonactive')
    }}
    style={style} className="list-label-item">{props.isActive ? 'Active' : 'Not active'}</span>);
  }
}

export default Label