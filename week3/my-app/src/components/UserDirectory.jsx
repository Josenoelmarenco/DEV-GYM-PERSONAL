//Child
function UserCard({user}){
    const{id, role, active, profile:{name, city}}= user;
    return (
        <li>
            <p>Usuarios con roles de Moderador:</p>
            {role === 'moderator' && <span>🛡️ </span>} {name} - {city} (#{id})
            {!active && '(inactive)'}
        </li>
)};

export default function UserDirectory(){
    const users = [
        { id: 1, 
            profile: { name: "Noel", city: "Managua" }, 
            role: "admin", 
            active: true 
        },
        { id: 2, profile: { name: "Carl", city: "Masaya" }, role: "user", active: false },
        { id: 3, profile: { name: "Anastasio", city: "Helsinki" }, role: "user", active: true },
        { id: 4, profile: { name: "Maria", city: "Madrid" }, role: "moderator", active: true },
        { id: 5, profile: { name: "Kris", city: "Espoo" }, role: "user", active: false },
];

return (
    <ul>
        {users
        .filter((u) => u.active === true && u.role !== 'admin')
        .map((u) => (
            <UserCard key={u.id} user={u} />
        ))
        }
    </ul>
)
}