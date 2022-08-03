// Hacer una petición a la url https://reqres.in hacer el llamado a la API cuando se carga la página puede usar axios/fetch
// Mostrar la lista de los usuarios por los siguientes campos (first_name, last_name, email, avatar).
// añadir un botón para eliminar un usuario por id
// añadir dos botones de (ascending/descending) en la parte superior
// filtre el array de datos por last_name(ascending/descending)
import './App.css';
import {useEffect, useState} from "react";


function App() {

  const [users, setUsers] = useState([])

  useEffect( () => {
    fetch('https://reqres.in/api/users').then((response) => {
      return response.json()
    }).then((data) => {
      setUsers(data.data)
    })

  }, [])

  // const deleteUserById = (id) => {
  //   fetch(`https://reqres.in/api/users/${id}`, {method: 'DELETE'}).then((res) => {
  //     return res.json()
  //   }).then((data) => {
  //     setUsers(data.data)
  //   })
  // }

  const sortAscending = (users) => {
    const copiedUsers = [...users]
     setUsers(copiedUsers.sort((a, b) => {
       return a.last_name > b.last_name ? 1 : -1
     }))
  }

  const sortDescending = (users) => {
    const copiedUsers = [...users]
     setUsers(copiedUsers.sort((a, b) => {
       return a.last_name < b.last_name ? 1 : -1
     }))
  }



  return (
    <div className="App">
      <button onClick={() =>  sortAscending(users)}>Sort ascending</button>
      <button onClick={() => sortDescending(users)}>Sort descending</button>
      <ul>
        {users.map(({id, first_name, last_name, email}) => {

          return <li key={id}>
            first name: {first_name}, last name: {last_name}, email: {email}
            {/*<button onClick={() =>  deleteUserById(id)}>Delete user</button>*/}
          </li>
        })}
      </ul>
    </div>
  );
}

export default App;
