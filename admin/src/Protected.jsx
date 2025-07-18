import React, { useState } from 'react'
import { Navigate, replace } from 'react-router-dom'

function Protected({children}) {
  const isLoggedIn = false;
  return isLoggedIn ? children : <Navigate to='/login' replace />
}

export default Protected