import React from "react";

import "./index.scss";

export type TableChildrenType = {
  children: React.ReactNode;
};

interface ITable extends TableChildrenType {
  //   // cl: {}
}

const Table: React.FC<ITable> = ({ children }) => {
  return <table className="table">{children}</table>;
};
export default Table;
