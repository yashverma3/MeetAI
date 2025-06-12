import { SidebarProvider } from "@/components/ui/sidebar";

import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

interface Props {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <SidebarProvider>
            <DashboardSidebar />
            <main className="flex flex-col w-full h-screen">
                {children}
            </main>
        </SidebarProvider>
    )
}

export default Layout;