function UserItem({ user}) {
  return(
    <li>
        {/* {id === 2 ? `Este coincide con 2: ${name} ${id}` : `Estos no coinciden: ${name} ${id}`} */}
        {userid === 2 && <span>⭐</span>} {user.name} (#{user.id})
    </li>
    );
// function UserItem({id, name}) {
//   return(
//     <li>
//         {/* {id === 2 ? `Este coincide con 2: ${name} ${id}` : `Estos no coinciden: ${name} ${id}`} */}
//         {id === 2 && <span>⭐</span>} {name} (#{id})
//     </li>
//     );
}
export default function Map() {
  const users = [
    { id: 1, name: "Noel" },
    { id: 2, name: "Carl" },
    { id: 3, name: "Kris" },
    { id: 4, name: "Milli" },
    { id: 5, name: "Karklr" },
    { id: 6, name: "Chur" },
  ];
const minId = 3;
  return (
    <ul>
        {users.map((u)=> (
            <UserItem key={u.id} user={u}/>
        ))}
        {/* {users
            .filter((u) => u.id >= minId)
            .map((u) => (
                <UserItem key={u.id} {...u}/>
            ))
        } */}


      {/* {users.map((u) => (
        <UserItem key={u.id} {...u} />
      ))} */}
    </ul>
  );
}
