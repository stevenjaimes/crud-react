

/* eslint-disable react/prop-types */
function UserList({ users, deleteUser, setUserToEdit }) {
    if (users.length === 0) {
      return <p>No hay usuarios registrados.</p>;
    }
  
    return (
      <table className="table-auto w-full border-collapse border border-gray-300 rounded-md shadow-sm">
        {/* Encabezado */}
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Nombre</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Acciones</th>
          </tr>
        </thead>
        {/* Cuerpo */}
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  onClick={() => setUserToEdit(user)}
                  className="mr-2 px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default UserList;
  
  
  