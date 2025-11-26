// components/layout/Header/Header.mobile.tsx
interface HeaderMobileProps {
  onMenuToggle: () => void;
  onSidebarToggle: () => void;
}

export default function HeaderMobile({ onMenuToggle, onSidebarToggle }: HeaderMobileProps) {
  // Your existing HeaderMobile component code
  return (
    <header className="header-mobile">
      {/* Your mobile header implementation */}
      <button onClick={onMenuToggle}>Menu</button>
      <button onClick={onSidebarToggle}>Sidebar</button>
    </header>
  );
}