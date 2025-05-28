import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../store/authSlice'

const ProtectedRoute = ({ children }) => {
  const { accessToken } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  // Check localStorage for persisted authentication data on mount
  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken')
    const storedRefreshToken = localStorage.getItem('refreshToken')
    const storedUser = localStorage.getItem('user')

    if (storedAccessToken && storedRefreshToken && storedUser && !accessToken) {
      dispatch(loginSuccess({
        user: JSON.parse(storedUser),
        accessToken: storedAccessToken,
        refreshToken: storedRefreshToken,
      }))
    }
  }, [accessToken, dispatch])

  return accessToken ? children : <Navigate to="/" />
}

export default ProtectedRoute 