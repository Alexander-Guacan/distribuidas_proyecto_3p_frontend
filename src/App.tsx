import { Route, Routes } from 'react-router'
import './App.css'
import { Login } from './auth/pages/Login'
import { NotFound } from './shared/pages/NotFound'
import { Layout } from './shared/layouts/Layout'
import { Home } from './home/pages/Home'
import { AuthProvider } from './auth/components/AuthProvider'
import { ProtectedRoute } from './auth/components/ProtectedRoute'
import { UserRole } from './auth/enums/auth.enum'
import { Dashboard } from './dashboard/pages/Dashboard'
import { Stores } from './admin/pages/Stores'
import { Products } from './store/pages/Products'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.STORE]} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={[UserRole.ADMIN]} />}>
            <Route path="/stores" element={<Stores />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={[UserRole.STORE]} />}>
            <Route path="/products" element={<Products />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
