import { Tour } from "./Tour";

export const TourList = (props) => {
    const {tours}=props;
    return(
        <section>
            <div className="title">
                <h2>Our tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map((tour) => (
                    <Tour key={tour.id} tour={tour} />
                ))}
            </div>
        </section>
    );
};