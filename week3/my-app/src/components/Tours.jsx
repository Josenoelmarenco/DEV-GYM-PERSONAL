function Tour({ tour }) {
  const { name, price } = tour;

  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </div>
  );
}

export default function TourList({ tours }) {
  return (
    <div>
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} />
      ))}
    </div>
  );
}
