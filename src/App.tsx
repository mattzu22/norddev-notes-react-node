import { Routes } from "./routes"

import { AuthProvider } from "./hooks/auth"

export function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}


