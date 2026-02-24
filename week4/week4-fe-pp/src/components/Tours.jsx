import { useState } from "react";
import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  const [toursData, setToursData] = useState(tours);

  const removeTour = (id) => {
    setToursData((prev) => prev.filter((tour) => tour.id !== id));
  };

  const restoreTours = () => {
    setToursData(tours);
  };

  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.length === 0 ? (
          <div className="temp">
            <h3>No tours left</h3>
            <button type="button" className="btn" onClick={restoreTours}>
              restore
            </button>
          </div>
        ) : (
          toursData.map((tour) => (
            <Tour key={tour.id} {...tour} onRemove={removeTour} />
          ))
        )}
      </div>
    </section>
  );
};

export default Tours;