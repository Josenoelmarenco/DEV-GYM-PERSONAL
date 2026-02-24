import { useState } from 'react';
import { services } from '../data'
import Title from './Title'
import Service from './Service'


const Services = () => {
  const [servicesData, setServicesData] = useState(services);
  
  const removeService = (id) => {
    setServicesData((prev) => prev.filter((service) => service.id !== id));
  };
  
  const restoreServices = () => {
    setServicesData(services);
    }; 

return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {servicesData.length === 0 ? (
          <div className="temp">
            <h3>No services left</h3>
            <button type="button" className="btn" onClick={restoreServices}>
              restore
            </button>
          </div>
        ) : (
          servicesData.map((service) => (
            <Service
              key={service.id}
              {...service}
              onRemove={removeService}
            />
          ))
        )}
      </div>
    </section>
  );
};
export default Services