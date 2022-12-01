import { Link } from 'react-router-dom'

const Welcome = ({ authenticated, user, handleLogOut }) => {
//   let authenticatedOptions
//   if (user) {
//     authenticatedOptions = (
//       <nav>
//         <h3>Welcome {user.email}!</h3>
//         <Link to="/feed">Feed</Link>
//         <Link onClick={handleLogOut} to="/">
//           Sign Out
//         </Link>
//       </nav>
//     )
//   }

  const publicOptions = (
    <nav className='login-options'>
      <Link to="/register" className='login'>Register</Link>
      <Link to="/signin" className='login'>Sign In</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/">
      </Link>
      {/* {authenticated && user ? authenticatedOptions : publicOptions} */}
      {publicOptions}
    </header>
  )
}

export default Welcome
