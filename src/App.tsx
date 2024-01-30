import "normalize.css";
import "./App.css";
import { useEffect, useState } from "react";
import UsersTable from "./components/UsersTable";
import { getUsers } from "./api/handlers/users";
import UsersFilter from "./components/UsersFilter";

export interface IUser {
  name: {
    // title: string;
    first: string;
    last: string;
  };
  picture: {
    // large: string,
    medium: string;
    thumbnail: string;
  };
  location: {
    state: string;
    city: string;
  };
  email: string;
  phone: string;
  registered: {
    date: string;
  };
}

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
      <div>
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
