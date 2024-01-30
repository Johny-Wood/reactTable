import React from "react";
import { TableChildrenType } from "../Table";

const TableRow: React.FC<TableChildrenType> = ({ children }) => {
  return <tr>{children}</tr>;
};

export default TableRow;
