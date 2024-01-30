import React from "react";
import "./index.scss";

import { TableChildrenType } from "../Table";

const TableCell: React.FC<TableChildrenType> = ({ children }) => {
  return <td className="table-cell">{children}</td>;
};

export default TableCell;
