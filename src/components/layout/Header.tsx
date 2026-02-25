"use client";

import React from 'react';
import { useSidebar } from './SidebarProvider';
import './Header.css';

export default function Header() {
    const { toggle } = useSidebar();

    return (
        <header className="header glass-panel">
            <div className="header-left">
                <button className="mobile-menu-btn" onClick={toggle} aria-label="Toggle Sidebar">
                    ☰
                </button>
                <div className="header-breadcrumbs">
                    <span className="breadcrumb text-muted">Portal</span>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">Dashboard</span>
                </div>
            </div>
            <div className="header-actions">
                <button className="icon-btn" aria-label="Notifications">
                    <span className="bell-icon">🔔</span>
                    <span className="notification-badge">3</span>
                </button>
            </div>
        </header>
    );
}
