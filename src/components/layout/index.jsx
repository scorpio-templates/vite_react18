import { Link, Outlet } from 'react-router-dom'
function Layout({ menu }) {
  return (
    <div>
      <header>
        <div>
          <Link to="/">HOME</Link>
        </div>
      </header>
      <section>
        <ul>
          {menu.map(({ name, key }) => (
            <li key={key}>
              <Link to={key}>{name}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </section>
    </div>
  )
}

export default Layout
Layout.defaultProps = {
  menu: [],
}
