import App from "../_components/App";
import DeadlinesProvider from "../providers/DeadlinesProvider";
import RolesProvider from "../providers/RolesProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DeadlinesProvider>
      <RolesProvider>
        <App>{children}</App>
      </RolesProvider>
    </DeadlinesProvider>
  );
}
