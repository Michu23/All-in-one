import React, { Component } from 'react'
import './Tools.css'

export default class Tools extends React.Component {
  render() {

    const {
        children,
        onAction
    }=this.props;

    const onlyChild = React.Children.only(children);
    const count = React.Children.count(onlyChild.props.children);

    return (
        <div className="list-tools">
        <div className="list-header">
            <select name="status" onChange={onAction}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="nonactive">Non-Active</option>
            </select>
        </div>
        <div className="list-footer">
Total items: {count}
        </div>
            {children}

        </div>
    )
  }
}
