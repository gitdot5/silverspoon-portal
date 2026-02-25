'use client';
import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

import './page.css';

const data = [
    { name: 'Wk 1', revenue: 40000, expenses: 24000 },
    { name: 'Wk 2', revenue: 45000, expenses: 28000 },
    { name: 'Wk 3', revenue: 42000, expenses: 26000 },
    { name: 'Wk 4', revenue: 58000, expenses: 32000 },
    { name: 'Wk 5', revenue: 60890, expenses: 31000 },
];

export default function DashboardPage() {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div>
                    <h1 className="page-title">Financial Overview</h1>
                    <p className="page-subtitle">Welcome back, here is what&apos;s happening today.</p>
                </div>
                <div className="date-filter glass-panel">
                    <span className="current-date">October 2026</span>
                    <span className="dropdown-icon">â¼</span>
                </div>
            </div>

            <div className="kpi-grid">
                <div className="kpi-card glass-panel animate-fade-in" style={{ animationDelay: '0ms' }}>
                    <div className="kpi-header">
                        <h3 className="kpi-title">Total Revenue</h3>
                        <span className="kpi-trend positive">+12.5%</span>
                    </div>
                    <div className="kpi-value">$245,890.00</div>
                    <div className="kpi-chart-stub revenue-stub"></div>
                </div>

                <div className="kpi-card glass-panel animate-fade-in" style={{ animationDelay: '100ms' }}>
                    <div className="kpi-header">
                        <h3 className="kpi-title">Prime Cost</h3>
                        <span className="kpi-trend negative">-2.1%</span>
                    </div>
                    <div className="kpi-value">58.4%</div>
                    <div className="kpi-chart-stub cost-stub"></div>
                </div>

                <div className="kpi-card glass-panel animate-fade-in" style={{ animationDelay: '200ms' }}>
                    <div className="kpi-header">
                        <h3 className="kpi-title">Net Income</h3>
                        <span className="kpi-trend positive">+4.2%</span>
                    </div>
                    <div className="kpi-value">$42,150.00</div>
                    <div className="kpi-chart-stub income-stub"></div>
                </div>
            </div>

            <div className="dashboard-main-charts">
                <div className="chart-container glass-panel animate-fade-in" style={{ animationDelay: '300ms' }}>
                    <h3 className="section-title">Revenue vs. Expenses</h3>
                    <div style={{ width: '100%', height: 350, marginTop: '2rem' }}>
                        <ResponsiveContainer>
                            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--text-muted)" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="var(--text-muted)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
                                <YAxis stroke="var(--text-muted)" tick={{ fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-light)" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-light)', borderRadius: '8px', color: 'var(--text-primary)' }}
                                    itemStyle={{ color: 'var(--text-primary)' }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="var(--accent-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                                <Area type="monotone" dataKey="expenses" stroke="var(--text-muted)" strokeWidth={3} fillOpacity={1} fill="url(#colorExpenses)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>


        </div>
    );
}
