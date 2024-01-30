import React from "react";
import "./index.scss";

import { TableChildrenType } from "../Table";

const TableBody: React.FC<TableChildrenType> = ({ children }) => {
  return <tbody className="table-body">{children}</tbody>;
};

export default TableBody;
