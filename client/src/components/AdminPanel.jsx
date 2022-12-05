
export default function AdminPanel (props) {
    let authenticatedOptions
    if (props.user && props.user.username ==="admin") {
         return (
          <div className='login-options'>
            <h3>Welcome Administrator!!</h3>
          </div>
        )
        console.log(props.user)
      }
      else {
          return(
              <div>
                  <h1>Sorry you do not have access to this page!</h1>
              </div>
          )
      }

    
      return (
        <div>
          {authenticatedOptions}
        </div>
      )
    
}