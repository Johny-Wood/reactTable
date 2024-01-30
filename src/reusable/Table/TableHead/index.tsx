import React from "react";
import { TableChildrenType } from "..";

const TableHead: React.FC<TableChildrenType> = ({ children }) => {
  return <thead className="table-head">{children}</thead>;
};

export default TableHead;
