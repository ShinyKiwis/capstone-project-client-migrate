import App from "../_components/App";
import RolesProvider from "../providers/RolesProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RolesProvider>
      <App>{children}</App>
    </RolesProvider>
  );
}
