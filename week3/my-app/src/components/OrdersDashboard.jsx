//Child
function OrderRow({order}){
    const{id, total, status, customer:{name, city}} = order;

    return(
        <li>
            {status === 'paid' ? '✅' : '🕒'} {name} - {city} | £{total.toFixed(2)} ({id})
        </li>
    );
}


export function OrdersDashboard(){
    const orders = [
        { id: "a1", customer: { name: "Noel", city: "Managua" }, total: 24.5, status: "paid" },
        { id: "b2", customer: { name: "Carl", city: "Masaya" }, total: 9.99, status: "pending" },
        { id: "c3", customer: { name: "Maria", city: "Madrid" }, total: 120, status: "paid" },
        { id: "d4", customer: { name: "Kris", city: "Espoo" }, total: 45, status: "cancelled" },
        { id: "e5", customer: { name: "Anastasio", city: "Helsinki" }, total: 80, status: "paid" },
    ];

    // 1) Create a NEW array (immutability) applying 10% discount to paid orders
    const discounted = orders.map((o) =>
        o.status === 'paid' ? {...o, total: o.total * 0.9} : o);

    // 2) Filter + render
    const visible = discounted.filter((o) =>
            o.status !== 'cancelled' &&
            o.total >= 20 &&
            o.customer.city.startsWith('M')
    );
    
    return(
        <ul>
            {visible.map((o) => (
                <OrderRow key={o.id} order={o}/>
            ))}
        </ul>
    );
}
