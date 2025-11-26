// components/layout/Header/Header.tablet.tsx
interface HeaderTabletProps {
  onMenuToggle: () => void;
  onSidebarToggle: () => void;
}

export default function HeaderTablet({ onMenuToggle, onSidebarToggle }: HeaderTabletProps) {
  // Your existing HeaderTablet component code
  return (
    <header className="header-tablet">
      {/* Your tablet header implementation */}
      <button onClick={onMenuToggle}>Menu</button>
      <button onClick={onSidebarToggle}>Sidebar</button>
    </header>
  );
}