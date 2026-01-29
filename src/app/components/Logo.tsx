export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#9333ea" />
        </linearGradient>
      </defs>
      
      {/* Outer ring */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        fill="none"
      />
      
      {/* Mountain/Peak shape forming an "A" */}
      <path
        d="M 50 20 L 70 60 L 62 60 L 50 35 L 38 60 L 30 60 Z"
        fill="url(#logoGradient)"
      />
      
      {/* Bridge/Link element - horizontal bar */}
      <rect
        x="42"
        y="50"
        width="16"
        height="3"
        fill="url(#logoGradient)"
        rx="1.5"
      />
      
      {/* Connection dots */}
      <circle cx="35" cy="65" r="3" fill="url(#logoGradient)" />
      <circle cx="50" cy="72" r="3" fill="url(#logoGradient)" />
      <circle cx="65" cy="65" r="3" fill="url(#logoGradient)" />
      
      {/* Connecting lines between dots */}
      <line x1="35" y1="65" x2="50" y2="72" stroke="url(#logoGradient)" strokeWidth="1.5" />
      <line x1="50" y1="72" x2="65" y2="65" stroke="url(#logoGradient)" strokeWidth="1.5" />
    </svg>
  );
}
