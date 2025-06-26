const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center min-h-screen w-full border border-red-400">
      {children}
    </div>
  );
};
export default Layout;
