import React from 'react'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import ProtectedRoute from './ProtectedRoute.jsx'

export const publicRoutes = [
  {
    path: '/',
    element: <Login />
  }
]

export const protectedRoutes = [
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]

export const routes = [
  ...publicRoutes,
  ...protectedRoutes.map(route => ({
    ...route,
    element: <ProtectedRoute>{route.element}</ProtectedRoute>
  }))
]

export default routes 