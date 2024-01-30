import React, { useEffect, useState } from "react";
import { IUser } from "../../App";
import { Input } from "../../reusable/Input";
import { useDebounce } from "../../hooks/useDebounce";

interface IUsersFilter {
  users: IUser[];
  setFilteredUsers: (value: IUser[]) => void;
}

const UsersFilter: React.FC<IUsersFilter> = ({ users, setFilteredUsers }) => {
  const [fName, setFName] = useState("");
  const debouncedFName = useDebounce(fName);

  console.log(fName);
  useEffect(() => {
    if (users) {
      if (debouncedFName.length > 0) {
        setFilteredUsers(
          users.filter((user) =>
            user.name.first
              .toLowerCase()
              .includes(debouncedFName.toLowerCase()),
          ),
        );
      } else {
        setFilteredUsers(users);
      }
    }
  }, [debouncedFName]);

  return (
    <div className="users-filter">
      <Input onChange={(value) => setFName(value)} value={fName} />
    </div>
  );
};

export default UsersFilter;
