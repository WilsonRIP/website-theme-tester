import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-background border border-border rounded-lg shadow-sm ${className}`}>
      {children}
    </div>
  );
}
