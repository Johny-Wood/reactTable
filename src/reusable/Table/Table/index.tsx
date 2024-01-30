import React from "react";

export type TableChildrenType = {
  children: React.ReactNode;
};

interface ITable extends TableChildrenType {
  // add typed css properties support
  // cl: {}
}

const Table: React.FC<ITable> = ({ children }) => {
  return <table className="table">{children}</table>;
};
export default Table;
