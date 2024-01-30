import React from "react";
import "./index.scss";

import { TableChildrenType } from "../Table";

const TableRow: React.FC<TableChildrenType> = ({ children }) => {
  return <tr className="table-row">{children}</tr>;
};

export default TableRow;
