const LeetCode = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16.105 18.505a.747.747 0 0 1 0 1.056l-1.953 1.953a1.493 1.493 0 0 1-2.112 0l-5.811-5.811a1.493 1.493 0 0 1 0-2.112l1.953-1.953a.747.747 0 0 1 1.056 1.056l-1.707 1.707a.497.497 0 0 0 0 .704l5.811 5.811a.497.497 0 0 0 .704 0l1.707-1.707a.747.747 0 0 1 1.056 0Z" />
    <path d="M12 5V3" />
    <path d="M5 12H3" />
    <path d="M21 12h-2" />
    <path d="M12 21v-2" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

export default LeetCode;
