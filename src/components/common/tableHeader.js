import React, { Component } from "react";

//columns: Array ["Title", "Genre", ...]
//sortColumn: object
//onSort: function

class TableHeader extends Component {
  raiseSort = path => {
    // the interface of this method is if you click "Title", the "path" in state is
    // equal to the arguement "path", so it will be sorted with "desc";
    // if you click other path rather than "Title", first, the arguement "path" will
    // replace the "path" in state, then it will be sorted with "asc", and if you
    // clicked the same path again, it will be sorted by "desc".
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      // you click other path but not the initialized path: "Title"
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    //passing data from child to parent component
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
