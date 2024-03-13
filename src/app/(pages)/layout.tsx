import Navbar from "@/components/navbar/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <div className="footer w-full h-32 flex items-center justify-center bg-foreground">
        <h1 className="text-background">Footer</h1>
      </div>
    </>
  );
}
