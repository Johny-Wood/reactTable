import React, { useEffect, useState } from "react";
import "./index.scss";

import { IUser } from "../../api/handlers/users";
import { Input } from "../../reusable/Input";
import { debounce } from "../../utils/debounce";

interface IUsersFilter {
  users: IUser[];
  setFilteredUsers: (value: IUser[]) => void;
  setFilteredUsersNotFound: (value: boolean) => void;
  filteredUsersNotFound: boolean;
}

const UsersFilter: React.FC<IUsersFilter> = ({
  users,
  setFilteredUsers,
  setFilteredUsersNotFound,
  filteredUsersNotFound,
}) => {
  const [fName, setFName] = useState("");
  const [debouncedFName, setDebouncedFName] = useState("");

  useEffect(() => {
    if (users) {
      if (debouncedFName.length > 0) {
        const f = users.filter((user) =>
          user.name.first.toLowerCase().includes(debouncedFName.toLowerCase()),
        );

        if (f.length == 0) {
          setFilteredUsersNotFound(true);
        } else {
          setFilteredUsersNotFound(false);
        }

        setFilteredUsers(f);
      } else {
        setFilteredUsers(users);
      }
    }
  }, [debouncedFName]);

  const handleNameFilter = (value: string) => {
    setFName(value);
    debounce((v) => setDebouncedFName(v), 500)(value);
  };

  const handleResetNameFilter = () => {
    setFName("");
    setDebouncedFName("");
    setFilteredUsers(users);
  };

  return (
    <div className="users-filter">
      <div className="users-filter__input">
        <Input onChange={handleNameFilter} value={fName} placeholder={"Mike"} />
        {debouncedFName && filteredUsersNotFound && (
          <label className="users-filter__error">No users found</label>
        )}
      </div>
      <button
        className="users-filter__reset-btn"
        onClick={handleResetNameFilter}
      >
        Reset name filter
      </button>
    </div>
  );
};

export default UsersFilter;
