import React, { useEffect, useState } from "react";
import "./index.scss";

import { IUser } from "../../api/handlers/users";
import { Input } from "../../reusable/Input";
import { debounce } from "../../utils/debounce";

interface IUsersFilter {
  users: IUser[];
  setFilteredUsers: (value: IUser[]) => void;
}

const UsersFilter: React.FC<IUsersFilter> = ({ users, setFilteredUsers }) => {
  const [fName, setFName] = useState("");
  const [debouncedFName, setDebouncedFName] = useState("");

  const [fUsers, setFUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (users) {
      if (debouncedFName.length > 0) {
        const f = users.filter((user) =>
          user.name.first.toLowerCase().includes(debouncedFName.toLowerCase()),
        );
        setFilteredUsers(f);
        setFUsers(f);
      } else {
        setFilteredUsers(users);
        setFUsers([]);
      }
    }
  }, [debouncedFName]);

  const handleNameFilter = (value: string) => {
    setFName(value);
    debounce((v) => setDebouncedFName(v), 500)(value);
  };

  return (
    <div className="users-filter">
      <div className="users-filter__input">
        <Input onChange={handleNameFilter} value={fName} placeholder={"Mike"} />
        {fName && fUsers.length == 0 && (
          <label className="users-filter__error">No users found</label>
        )}
      </div>
    </div>
  );
};

export default UsersFilter;
