import { motion } from 'motion/react';
import { Coins } from 'lucide-react';
import { cn } from '../lib/utils';

interface GlassInputCardProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  dir?: 'ltr' | 'rtl';
}

export function GlassInputCard({ label, value, onChange, readOnly, dir = 'ltr' }: GlassInputCardProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative overflow-hidden rounded-3xl p-6 backdrop-blur-[40px] shadow-lg transition-all duration-300",
        "bg-white/10 border border-white/20 hover:bg-white/15",
        "dark:bg-black/20 dark:border-white/10 dark:hover:bg-black/30"
      )}
    >
      <div className={cn("flex items-center gap-3 mb-2 opacity-70", dir === 'rtl' && "flex-row-reverse")}>
        <Coins className="w-5 h-5 text-yellow-400" />
        <span className="text-sm font-medium tracking-wide uppercase text-white/80">{label}</span>
      </div>
      
      <div className="relative">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          readOnly={readOnly}
          placeholder="0"
          className={cn(
            "w-full bg-transparent text-4xl font-bold outline-none placeholder:text-white/20 transition-all duration-300",
            "focus:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]",
            dir === 'rtl' ? "text-right" : "text-left",
            "text-white"
          )}
        />
      </div>
      
      {/* Glow effect container */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-inset ring-white/10 group-focus-within:ring-white/50 transition-all duration-500" />
    </motion.div>
  );
}
