import { Outlet } from 'react-router';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

function AppLayout() {
  return (
    <SidebarProvider>
      <Sidebar />

      <SidebarInset>
        <Navbar />

        <main className='flex-1 p-6'>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default AppLayout;
