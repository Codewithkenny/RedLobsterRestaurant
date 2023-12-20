import React from 'react'

const LoggedInMenu = ({ user, logout}) => {
  return (
      <>
          <span className="p__opensans" style={{ marginRight: "10px", color: "#fff" }}>
              Welcome, {user.email}
          </span>
          <a href="/logout" onClick={logout} className="p__opensans">
              Logout
          </a>
      </>
  )
}

export default LoggedInMenu