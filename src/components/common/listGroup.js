import React from "react";

const ListGroup = ({ items, textProperty, onItemSelect, selectedItem }) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          style={{ cursor: "pointer" }}
          onClick={() => onItemSelect(item)}
          key={index}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name"
};

export default ListGroup;
