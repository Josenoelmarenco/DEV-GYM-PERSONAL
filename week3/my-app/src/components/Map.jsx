const producto = {
  id: 1,
  nombre: "Monitor 4K",
  precio: 300,
};

function TarjetaProducto({ nombre, precio }) {
  return (
    <div>
      <h1>{nombre}</h1>
      <p>Precio actualizado: {precio}</p>
    </div>
  );
}

// export default function Tarjeta() {
//   return <TarjetaProducto nombre={producto.nombre} precio={producto.precio} />;
// }

export default function Map() {
  return <TarjetaProducto {...producto} />;
}