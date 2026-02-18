// function Title() {
//   return (
//     <div>
//       <p className="section-dummy">Text</p>
//       <p className="section-dummy">Text</p>
//     </div>
//   );
// }


const Title = ({title, subTitle}) => {
  return (
    <div className = 'section-title'>
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  )
}
export default Title;