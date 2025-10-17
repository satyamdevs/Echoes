import React from 'react';
import Task from './charts/taskcard';
import GlassCard from './ui/glasscard'
import Earning from './charts/areacard';
import Radar from './charts/radar';
import BarCharts from './charts/barchart';

const BalanceProfileCard = () => (
    <GlassCard className="row-span-2  h-95 flex flex-col justify-between">
        <div>
            <h2 className="text-sm text-white/70">Total Balance</h2>
            <p className="text-4xl font-bold mt-1 mb-3">$145,000</p>
            <p className="text-sm text-white/70">Available Spend $20,000</p>
        </div>
        <div className="flex items-center mt-2">
            <img src="https://i.pravatar.cc/150?img=61" alt="Alex Tescher" className="w-16 h-16 rounded-full object-cover mr-4 shadow-xl" />
            <div>
                <p className="text-xl font-semibold">Alex</p>
                <p className="text-sm text-white/70">Tescher</p>
            </div>
        </div>
    </GlassCard>
);

// 2. Simple Stat Cards (Col 2, Row 1)
const StatCards = () => (
    <>
        <GlassCard className='74'>
            <h3 className="text-sm text-white/70">Total transactions</h3>
            <p className="text-3xl font-bold">57</p>
        </GlassCard>

    </>
);

// 3. Earnings Overview (Col 2, Row 2)
const EarningsCard = () => (
    <GlassCard className='h-67'>
        <div className="flex  justify-between items-center">
            <h2 className="text-lg font-semibold">Earnings Overview</h2>
            <button className="text-white/70 hover:text-white"></button>
        </div>
        <div className="flex items-end mt-4">
            {/* Mock Chart Area */}
            <div className="relative w-full h-24">
                {/* Mock Y-Axis Labels */}
                <div className="absolute left-0 text-xs text-white/50 space-y-3">
                    <div>11k</div>
                    <div>110</div>
                    <div>781</div>
                    <div>361</div>
                </div>

                {/* Mock Line Graph */}
                <svg viewBox="0 0 100 80" className="w-full h-full absolute left-0" preserveAspectRatio="none">
                    {/* Mock Grid Lines */}
                    <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.1)" strokeDasharray="2 2" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.1)" strokeDasharray="2 2" />
                    {/* Mock Data Line (Simplified path) */}
                    <path
                        d="M 5 70 Q 25 20, 45 40 T 85 55"
                        fill="none"
                        stroke="#8B5CF6" // Purple tone
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>

                {/* Data Point Callout */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 p-2 rounded-lg text-sm font-semibold">
                    Total Earnings
                    <p className="text-base font-bold">$18,000</p>
                </div>
            </div>
        </div>
    </GlassCard>
);


// 5. Major Expenses (Col 1, Row 3)
const ExpensesCard = () => (
    <GlassCard className="row-span-2 h-74 flex flex-col justify-between">
        <h2 className="text-lg font-semibold mb-4">Major Expenses</h2>
                    <p className="text-3xl font-bold">57</p>

    </GlassCard>
);

const IncomeCard = () => (
    <GlassCard>
        <h2 className="text-sm  ">Top Income</h2>
            <p className="text-3xl font-bold">57</p>

    </GlassCard>
);

const CTACard = () => (
    <GlassCard className="flex h-68 flex-col justify-center items-center text-center">
        <h2 className="text-lg font-semibold mb-4">Are you preparing to start with us?</h2>
        <button
            className="flex items-center justify-center px-8 py-3 rounded-xl text-white font-bold shadow-xl transition-all"
            style={{ background: 'linear-gradient(to right, #FF70A6, #FF9770)' }}
        >
            Get Started

        </button>
    </GlassCard>
);

const ScheduleCard = () => (
    <GlassCard className="row-span-1">
        <h2 className="text-sm font-semibold mb-4">Schedule</h2>
        <div className="grid grid-cols-7 text-center text-white/70 text-xs gap-1">
            {['Su', 'Mo', 'Tu', 'We', 'Fr', 'Sa'].map((day) => <span key={day} className="font-bold">{day}</span>)}
            {[...Array(30).keys()].map((dayIndex) => {
                const day = dayIndex + 1;
                const isSelected = day === 19;
                return (
                    <span
                        key={day}
                        className={`p-1 rounded-full text-sm cursor-pointer ${isSelected ? 'bg-red-500 font-bold text-white' : dayIndex < 5 ? 'text-white/60' : 'hover:bg-white/10'
                            }`}
                    >
                        {day}
                    </span>
                );
            })}
        </div>
    </GlassCard>
);

const TodayCard = () => (
    <GlassCard className="row-span-3 h-99 bg-red-500/10" // Subtle red gradient to match image
        style={{
            background: 'linear-gradient(to bottom right, rgba(255, 112, 166, 0.1), rgba(255, 151, 112, 0.1))',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
    >
        <h2 className="text-lg font-semibold mb-4">Today</h2>
        <div className="space-y-4">
            {[
                { title: 'Interview', date: 'Sep. 4 | 21 AM', time: '5:00 AM' },
                { title: 'Research Meeting', date: 'Sep. 7', time: '6:30 AM' },
                { title: 'UI Development', date: 'Sep. 4', time: '8:45 AM' },
            ].map((event, index) => (
                <div key={index} className="flex justify-between items-center border-b border-white/20 pb-2 last:border-b-0">
                    <div className="flex items-center space-x-3">
                        <div>
                            <p className="text-sm font-medium">{event.title}</p>
                            <p className="text-xs text-white/70">{event.date}</p>
                        </div>
                    </div>
                    <span className="text-sm font-medium text-red-400">{event.time}</span>
                </div>
            ))}
        </div>
    </GlassCard>
);

const Dash = () => {
    return (
        <div
            className="h-[80% ]w-[95%] p-3 sm:p-10 bg-transparent flex justify-center"
        >
            <div className="w-[100%] h-[80%] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-min">
                    <div className="col-span-4 sm:col-span-2 lg:col-span-1 grid auto-rows-min gap-4">
                        <BalanceProfileCard />
                        <ExpensesCard />
                    </div>
                    <div className="col-span-4 lg:col-span-2 grid grid-cols-3 gap-6 auto-rows-min">
                        <div className="col-span-1">
                            <StatCards />
                        </div>
                        <div className="col-span-1">
                            <StatCards />
                        </div>
                        

                        <div className="col-span-1">
                            <IncomeCard />
                        </div>
                        <div className="col-span-3">
                            <Earning />
                        </div>
                        <div className="col-span-1">
                            <Task />
                        </div>
                        <div className="col-span-2">
                            <ScheduleCard />
                            
                        </div>
                    </div>
                    <div className="col-span-4 lg:col-span-1 grid grid-rows-[minmax(0,_1fr)_minmax(0,_2fr)] gap-4">
                        <Radar />
                        <BarCharts />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dash;