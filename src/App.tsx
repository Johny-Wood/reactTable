import "normalize.css";
import "./App.css";
import { useEffect, useState } from "react";
import UsersTable from "./components/UsersTable";
import { IUser, getUsers } from "./api/handlers/users";
import UsersFilter from "./components/UsersFilter";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [filteredUsersNotFound, setFilteredUsersNotFound] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const usersData = await getUsers({
          include: "name, picture, location, email, phone, registered",
          results: 15,
        });

        if (usersData) {
          setUsers(usersData.results);
          setFilteredUsers(usersData.results);
        }
      } catch (err) {
        // Handle error
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <div className="page">
        <UsersFilter
          users={users}
          setFilteredUsers={(value) => setFilteredUsers(value)}
          setFilteredUsersNotFound={(value) => setFilteredUsersNotFound(value)}
          filteredUsersNotFound={filteredUsersNotFound}
        />
        <UsersTable
          filteredUsers={filteredUsers}
          filteredUsersNotFound={filteredUsersNotFound}
        />
      </div>
    </>
  );
};

export default App;
