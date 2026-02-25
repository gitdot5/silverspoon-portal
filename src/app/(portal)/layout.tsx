import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { SidebarProvider } from '@/components/layout/SidebarProvider';
import './layout.css';

export default function PortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <div className="portal-layout">
                <Sidebar />
                <div className="portal-main">
                    <Header />
                    <main className="portal-content">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}
