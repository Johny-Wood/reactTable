import React from "react";
import "./index.scss";

import { TableChildrenType } from "../Table";

const TableHead: React.FC<TableChildrenType> = ({ children }) => {
  return <thead className="table-head">{children}</thead>;
};

export default TableHead;
