// components/layout/Header/Header.4k.tsx
interface Header4kProps {
  onSidebarToggle: () => void;
}

export default function Header4k({ onSidebarToggle }: Header4kProps) {
  // Your existing Header4k component code
  return (
    <header className="header-4k">
      {/* Your 4k header implementation */}
      <button onClick={onSidebarToggle}>Sidebar</button>
    </header>
  );
}