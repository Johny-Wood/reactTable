import React from "react";
import "./index.scss";

import { TableChildrenType } from "../Table";

const TableHeadCell: React.FC<TableChildrenType> = ({ children }) => {
  return <th className="table-cell table-head-cell">{children}</th>;
};

export default TableHeadCell;
