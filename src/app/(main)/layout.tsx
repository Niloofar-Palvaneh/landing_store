import Menu from '../components/Menu';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Menu />
      <main>{children}</main>
    </>
  );
}
