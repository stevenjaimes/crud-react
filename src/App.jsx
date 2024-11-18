import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }]);   
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? { ...user, ...updatedUser } : user
    );
  
    setUsers(updatedUsers); 
    setUserToEdit(null); 
  };


  const deleteUser = (userDelete) => {
    setUsers(users.filter((user) => user.id !== userDelete));
  };

  return (
    <>
      <div className="container mx-auto flex flex-col items-center">
        {/* Encabezado del CRUD */}
        <h1 className="text-3xl font-bold text-center my-4">CRUD en React</h1>

        <UserForm
          addUser={addUser}    
          updateUser={updateUser}
          userToEdit={userToEdit}
          clearEdit={() => setUserToEdit(null)}
        />
        
        <UserList
          users={users}
          setUserToEdit={setUserToEdit}
          deleteUser={deleteUser}
        />
      </div>
    </>
  );
}
