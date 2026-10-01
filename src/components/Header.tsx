import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'

export default function Header() {
  const { likes } = useLikes()

  return (
    <header>
      <nav>
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Home
        </NavLink>
        <NavLink 
          to="/skills" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Skills
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Contact
        </NavLink>
      </nav>
      <div className="header-likes">
        ❤️ Likes: {likes}
      </div>
    </header>
  )
}