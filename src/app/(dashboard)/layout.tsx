import MainLayout from "@/layout/layout";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
