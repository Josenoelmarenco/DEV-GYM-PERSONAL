//aquí solamente damos el formato, en services mapeamos.
// const Service = ({ icon, title, text }) => {
//   return (
//     <article className='service'>
//       <span className='service-icon'>
//         <i className={icon}></i>
//       </span>
//       <div className='service-info'>
//         <h4 className='service-title'>{title}</h4>
//         <p className='service-text'>{text}</p>
//       </div>
//     </article>
//   )
// }

// export default Service
{/* <article className='service'>
  <span className='service-icon'>
    <i className='fas fa-wallet fa-fw'></i>
  </span>
  <div className='service-info'>
    <h4 className='service-title'>saving money</h4>
    <p className='service-text'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.
    </p>
  </div>
</article> */}

const Service = ({icon, title, text}) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  )
}

export default Service 