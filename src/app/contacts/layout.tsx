import Sidebar from "@/components/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex">
        <div className="w-[20%] border h-full">
          <Sidebar />
        </div>
        <div className="w-[80%] min-h[100vh]">
            {children} 
        </div>
      </div>
    </div>
  );
}
