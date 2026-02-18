// function PageLink() {
//   return <div>PageLink</div>;
// }

const PageLink = ({ link, itemClass }) => {
  return (
    <li>
      <a href={link.href} className={itemClass}>
        {link.text}
      </a>
    </li>
  )
}

export default PageLink