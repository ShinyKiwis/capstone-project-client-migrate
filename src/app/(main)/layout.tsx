import App from "../_components/App"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <App>{children}</App>
  )
}
