import React from "react";
import { TableChildrenType } from "..";

const TableCell: React.FC<TableChildrenType> = ({ children }) => {
  return <td>{children}</td>;
};

export default TableCell;
