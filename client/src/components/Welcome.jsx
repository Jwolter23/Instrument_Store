import { Link } from 'react-router-dom'

const Welcome = ({ authenticated,user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav className='login-options'>
        <h3>Welcome {user.username}!</h3>
        <Link to="/cart" className='login'>cart</Link>
        <Link onClick={handleLogOut} className="login" to="/">
          Sign Out
        </Link>
      </nav>
    )
    console.log(user)
  }

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
      {authenticated && user  ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Welcome
