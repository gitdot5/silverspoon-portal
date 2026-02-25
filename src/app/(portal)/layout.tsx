import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import './layout.css';

export default function PortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="portal-layout">
            <Sidebar />
            <div className="portal-main">
                <Header />
                <main className="portal-content">
                    {children}
                </main>
            </div>
        </div>
    );
}
