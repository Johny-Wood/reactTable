import "normalize.css";
import "./App.css";
import { useEffect, useState } from "react";
import UsersTable from "./components/UsersTable";
import { IUser, getUsers } from "./api/handlers/users";
import UsersFilter from "./components/UsersFilter";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);

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
        />
        <UsersTable filteredUsers={filteredUsers} />
      </div>
    </>
  );
};

export default App;