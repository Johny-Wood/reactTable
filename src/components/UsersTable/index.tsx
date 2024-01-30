import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "../../reusable/Table";

import { IUser } from "../../App";

const columns = [
  "name",
  "picture",
  "location",
  "email",
  "phone",
  "registered date",
];

const UsersTable: React.FC<{ filteredUsers: IUser[] }> = ({
  filteredUsers,
}) => {
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);

  return (
    <div className="users-table">
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((label, i) => (
              <TableCell key={i}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {filteredUsers.map((row, rowIndex) => {
            return (
              <TableRow key={rowIndex}>
                <TableCell>{row.name.first + " " + row.name.last}</TableCell>
                <TableCell>
                  <span
                    className="user-avatar"
                    onMouseEnter={() => setHoveredRowIndex(rowIndex)}
                    onMouseLeave={() => setHoveredRowIndex(null)}
                  >
                    <img
                      src={row.picture.thumbnail}
                      className="user-avatar__image"
                    />
                    {/* Mb change to css display none - display block, because of */}
                    {/* if it would be Next js where would be an error server-client */}
                    {/* missmatch */}
                    {hoveredRowIndex === rowIndex && (
                      <span className="user-avatar__tooltip">
                        <img
                          src={row.picture.medium}
                          className="user-avatar__image--medium"
                        />
                      </span>
                    )}
                  </span>
                </TableCell>
                <TableCell>
                  {row.location.state + " " + row.location.city}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.registered.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersTable;
