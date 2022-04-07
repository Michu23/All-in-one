import React from "react";
import ListItem from "./ListItem";
import Tools from "./Tools";
import SimpleList from "./SimpleList";

const arr = [
  {
    id:1,
    title: "Appointment",
    descr: "The patient is returned to base",
    isActive: true,
  },
  {
    id:2,
    title: "Appointment2",
    descr: "The patient is returned to base",
    isActive: false,
  },
  {
    id:3,
    title: "Appointment3",
    descr: "The patient is returned to base",
    isActive: true,
  },
  {
    id:4,
    title: "Appointment4",
    descr: "The patient is returned to base",
    isActive: false,
  },
];

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: arr,
      activeState: "all",
    };
  }

  onListChange(evt) {
    console.log(evt.target.value);
    const value = evt.target.value;

    
    // arr = newList;
    this.setState({
      // data: newList
      activeState: value,
    });
  }

  handleDelete = (item) => {
    console.log("Deleted",item);
    const  newList = this.state.data.filter((element) => 
    element.id !== item.id);

    this.setState({
      data: newList
    });
  }

  render() {

    const {
        data,activeState
    }= this.state;

    const newList = data.filter((item) => {
      if (activeState == "all") {
        return true;
      }
      if (activeState == "active") {
        return item.isActive === true;
      }
      if (activeState == "nonactive") {
        return item.isActive === false;
      }
      return false;
    });

    return (
      <Tools onAction={this.onListChange.bind(this)}>
        <SimpleList onLabelClick={this.handleLabelClick} data={newList} onAction={this.handleDelete} />
      </Tools>
    );
  }
}

export default List;
