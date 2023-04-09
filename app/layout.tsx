import Provider from './Provider'
import NavBar from './components/NavBar'
import MonitorSession from './components/MonitorSession'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Provider>
          <MonitorSession />
          <NavBar />
        </Provider>
        {children}
      </body>
    </html>
  )
}
