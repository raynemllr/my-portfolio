import Topbar from "@/components/shared/Topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col">
      <Topbar />
      {children}
    </main>
  );
}
