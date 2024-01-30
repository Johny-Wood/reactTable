import React from "react";
import { TableChildrenType } from "..";

const TableRow: React.FC<TableChildrenType> = ({ children }) => {
  return <tr>{children}</tr>;
};

export default TableRow;
