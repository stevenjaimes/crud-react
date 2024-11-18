
import { useState, useEffect } from "react";

 
/* eslint-disable react/prop-types */
function UserForm({ addUser, updateUser, userToEdit, clearEdit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Actualiza el formulario si se selecciona un usuario para editar
  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
      setEmail(userToEdit.email);
    }
  }, [userToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {    // Validar campos
      alert("Por favor completa todos los campos.");
      return;
    }

    if (userToEdit) {
      updateUser({ id: userToEdit.id, name, email }); // Actualizar usuario existente
    } else {
      addUser({ name, email }); // Agregar nuevo usuario
    }

    setName("");
    setEmail("");
  };

  const handleCancelEdit = () => {
    clearEdit(); // Salir del modo edición
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className=" flex flex-col gap-4 bg-white shadow-md rounded mt-6 px-8 pt-6 pb-8 mb-4">
      <div className="justify-between">
        <label>Nombre: </label>
        <input className="ring-1 ring-gray-300 rounded-md ml-2 p-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-between">
        <label>Email: </label>
        <input className="ring-1 ring-gray-300 rounded-md p-2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">{userToEdit ? "Actualizar Usuario" : "Agregar Usuario"}</button>
      {userToEdit && <button type="button" onClick={handleCancelEdit}>Cancelar</button>}
    </form>
  );
}

export default UserForm;
