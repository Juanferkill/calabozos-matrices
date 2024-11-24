export const metadata = {
    title: 'Calabozos y Matrices',
    description: 'Una aventura matemática',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="es">
        <body>{children}</body>
      </html>
    )
  }