import Header from '../components/header'

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>react/next test</title>
      </head>
      <body>
        <header> <Header/> </header>
        <main>{children}</main>
      </body>
    </html>
  )
}