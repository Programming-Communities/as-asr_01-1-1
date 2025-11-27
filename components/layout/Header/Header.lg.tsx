
// components/layout/Header/Header.lg.tsx
interface HeaderLgProps {
  onSidebarToggle: () => void;
}

export default function HeaderLg({ onSidebarToggle }: HeaderLgProps) {
  // Your existing HeaderLg component code
  return (
    <header className="header-lg">
      {/* Your large header implementation */}
      <button onClick={onSidebarToggle}>Sidebar</button>
    </header>
  );
}

