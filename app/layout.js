import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css"

// components
import Navbar from "./components/Navbar"

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
