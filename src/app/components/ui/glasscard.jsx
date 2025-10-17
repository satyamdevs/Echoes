const GlassCard = ({ children, className = '' }) => (
    <div
        className={`px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg text-white ${className}`}
    >
        {children}
    </div>
);

export default GlassCard