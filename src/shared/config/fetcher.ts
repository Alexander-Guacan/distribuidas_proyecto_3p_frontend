import axios from 'axios'

// Configuración para Auth
export const authApi = axios.create({
  baseURL: 'http://localhost:8003/auth', // URL del microservicio de Auth
  headers: {
    'Content-Type': 'application/json',
  },
})

// Configuración para Users
export const usersApi = axios.create({
  baseURL: 'http://localhost:8001/api', // URL del microservicio de Users
  headers: {
    'Content-Type': 'application/json',
  },
})

// Configuración para Products
export const productsApi = axios.create({
  baseURL: 'http://localhost:8002/api', // URL del microservicio de Products
  headers: {
    'Content-Type': 'application/json',
  },
})
