import React from "react";
import Tools from "./Tools";
import ListItem from "./ListItem";

function SimpleList(props) {
  const { data, onAction } = props;

  return (
    <div>
      <div>
        <div className="app-list">
          {data.map((obj) => {
            return (
              <ListItem
                key={obj.title}
                title={obj.title}
                descr={obj.descr}
                isActive={obj.isActive}
                onDelete={() => {
                  onAction(obj);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SimpleList;
