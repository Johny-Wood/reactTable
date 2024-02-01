import React, { useState } from "react";
import "./index.scss";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeadCell,
} from "../../reusable/Table";

import { IUser } from "../../api/handlers/users";
import LoadingSpinner from "../../reusable/LoadingSpinner";

const columns = [
  "name",
  "picture",
  "location",
  "email",
  "phone",
  "registered date",
];

const UsersTable: React.FC<{
  filteredUsers: IUser[];
  filteredUsersNotFound: boolean;
}> = ({ filteredUsers, filteredUsersNotFound }) => {
  const [hoveredAvatarRowIndex, setHoveredAvatarRowIndex] = useState<
    number | null
  >(null);
  const [avatarTooltipPosition, setAvatarTooltipPosition] = useState({
    top: 0,
    left: 0,
  });

  const handleMouseEnter = (event: React.MouseEvent, rowIndex: number) => {
    const cell = event.currentTarget.getBoundingClientRect();
    const table = document
      .querySelector(".users-table")
      ?.getBoundingClientRect();

    if (table) {
      const tooltipLeft = cell.right + 10 + window.pageXOffset;
      const tooltipTop = cell.top - 175 + window.pageYOffset;
      setAvatarTooltipPosition({ left: tooltipLeft, top: tooltipTop });
      setHoveredAvatarRowIndex(rowIndex);
    }
  };

  const handleMouseLeave = () => {
    setHoveredAvatarRowIndex(null);
  };

  return (
    <div className="users-table">
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((label, i) => (
              <TableHeadCell key={i}>{label}</TableHeadCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {filteredUsers.length > 0 &&
            filteredUsers.map((row, rowIndex) => {
              const registeredDate = new Date(row.registered.date);
              const registeredYear = registeredDate.getFullYear();
              const registeredMonth = registeredDate.getMonth();
              const registeredDay = registeredDate.getDate();

              const formatedRegisteredDate = `${registeredYear}.${registeredMonth}.${registeredDay}`;

              return (
                <TableRow key={rowIndex}>
                  <TableCell>{row.name.first + " " + row.name.last}</TableCell>
                  <TableCell>
                    <span
                      className="user-avatar"
                      onMouseEnter={(e) => handleMouseEnter(e, rowIndex)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        src={row.picture.thumbnail}
                        className="user-avatar__image"
                      />
                    </span>
                  </TableCell>
                  <TableCell>
                    {row.location.state + " " + row.location.city}
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{formatedRegisteredDate}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>

      {filteredUsers.length == 0 && !filteredUsersNotFound && (
        <LoadingSpinner />
      )}
      {hoveredAvatarRowIndex !== null && (
        <div
          className="user-avatar-tooltip"
          style={{
            top: avatarTooltipPosition.top,
            left: avatarTooltipPosition.left,
          }}
        >
          <img
            src={filteredUsers[hoveredAvatarRowIndex].picture.medium}
            className="user-avatar__image--medium"
          />

          <div className="user-avatar-tooltip__pointer"></div>
        </div>
      )}
    </div>
  );
};

export default UsersTable;
