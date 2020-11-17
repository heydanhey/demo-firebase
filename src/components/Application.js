import React, { useContext } from 'react'
import { Router } from '@reach/router'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ProfilePage from './ProfilePage'
import PasswordReset from './PasswordReset'
import { UserContext } from '../providers/UserProvider'

function Application() {
  const { user, loading } = useContext(UserContext)

  if (loading) {
    return (
      <h1>
        Loading...
      </h1>
    )
  }
  return user ? (
    <ProfilePage />
  ) : (
    <Router>
      <SignUp path="signUp" />
      <SignIn path="/" />
      <PasswordReset path="passwordReset" />
    </Router>
  )
}

export default Application
