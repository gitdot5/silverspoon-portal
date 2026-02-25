"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSidebar } from './SidebarProvider';
import './Sidebar.css';

export default function Sidebar() {
    const pathname = usePathname();
    const { isOpen, setIsOpen } = useSidebar();

    return (
        <>
            {isOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setIsOpen(false)}
                />
            )}
            <aside className={`sidebar glass-panel ${isOpen ? 'mobile-open' : ''}`}>
                <div className="sidebar-header">
                    <div className="brand-logo">
                        <Image src="/silverspoon-logo.png" alt="Silverspoon Solutions" width={220} height={55} style={{ objectFit: 'contain' }} priority />
                    </div>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li><Link href="/dashboard" className={`nav-item ${pathname === '/dashboard' ? 'active' : ''}`} onClick={() => setIsOpen(false)}><span className="nav-icon">📊</span><span className="nav-text">Dashboard</span></Link></li>
                        <li><Link href="/reports" className={`nav-item ${pathname === '/reports' ? 'active' : ''}`} onClick={() => setIsOpen(false)}><span className="nav-icon">📄</span><span className="nav-text">Reports</span></Link></li>
                        <li><Link href="/strategy" className={`nav-item ${pathname === '/strategy' ? 'active' : ''}`} onClick={() => setIsOpen(false)}><span className="nav-icon">💡</span><span className="nav-text">Strategy</span></Link></li>
                        <li><Link href="/admin" className={`nav-item ${pathname === '/admin' ? 'active' : ''}`} onClick={() => setIsOpen(false)}><span className="nav-icon">⚙️</span><span className="nav-text">Admin</span></Link></li>
                    </ul>
                </nav>
                <div className="sidebar-footer">
                    <div className="user-profile">
                        <div className="avatar">A</div>
                        <div className="user-info">
                            <span className="user-name">Admin User</span>
                            <span className="user-role">Silverspoon Solutions</span>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
