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
  if (user && user.username ==="admin") {
    authenticatedOptions = (
      <nav className='login-options'>
        <h3>Welcome Administrator!!</h3>
        <Link to="/admin" className='login'>Admin Panel</Link>
        <Link to="/cart" className='login'>Cart</Link>
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
