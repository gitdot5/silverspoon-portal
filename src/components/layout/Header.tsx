import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <header className="header glass-panel">
            <div className="header-breadcrumbs">
                <span className="breadcrumb text-muted">Portal</span>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">Dashboard</span>
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
