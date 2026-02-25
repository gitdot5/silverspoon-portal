import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Sidebar.css';

export default function Sidebar() {
    return (
        <aside className="sidebar glass-panel">
            <div className="sidebar-header">
                <div className="brand-logo">
                    <Image src="/silverspoon-logo.png" alt="Silverspoon Solutions" width={220} height={55} style={{ objectFit: 'contain' }} priority />
                </div>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li><Link href="/dashboard" className="nav-item active"><span className="nav-icon">📊</span><span className="nav-text">Dashboard</span></Link></li>
                    <li><Link href="/reports" className="nav-item"><span className="nav-icon">📄</span><span className="nav-text">Reports</span></Link></li>
                    <li><Link href="/strategy" className="nav-item"><span className="nav-icon">💡</span><span className="nav-text">Strategy</span></Link></li>
                    <li><Link href="/admin" className="nav-item"><span className="nav-icon">⚙️</span><span className="nav-text">Admin</span></Link></li>
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
    );
}
