import React from 'react'
import Label from './Label'
import './ListItem.css'

function ListItem(props) {

const {
    title,descr,isActive,onDelete,onLabelClick,
} = props;

    return (
      <div className="list-item">
              <hr />
              <div className="list-title">
                <h4>{props.title}</h4>
                <label onClick={onDelete} className="">Delete</label>
              </div>
              <div className="list-descr">
                {props.descr}
              </div>
              <div className="list-label">
                <Label isActive={props.isActive} />
                
              </div>
              <hr />
            </div>
    )
  }

  export default ListItem