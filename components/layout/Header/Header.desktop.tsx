// components/layout/Header/Header.desktop.tsx
interface HeaderDesktopProps {
  onSidebarToggle: () => void;
}

export default function HeaderDesktop({ onSidebarToggle }: HeaderDesktopProps) {
  // Your existing HeaderDesktop component code
  return (
    <header className="header-desktop">
      {/* Your desktop header implementation */}
      <button onClick={onSidebarToggle}>Sidebar</button>
    </header>
  );
}