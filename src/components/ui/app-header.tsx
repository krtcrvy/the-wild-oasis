import { SidebarTrigger } from "./sidebar";

function AppHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
    </header>
  );
}

export default AppHeader;
