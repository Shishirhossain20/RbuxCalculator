import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { TaxMode } from '../hooks/useTaxCalculator';

interface SegmentedControlProps {
  mode: TaxMode;
  setMode: (mode: TaxMode) => void;
  options: { value: TaxMode; label: string }[];
}

export function SegmentedControl({ mode, setMode, options }: SegmentedControlProps) {
  return (
    <div className="relative flex p-1 bg-black/20 backdrop-blur-xl rounded-full border border-white/10 shadow-inner">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => setMode(option.value)}
          className={cn(
            "relative z-10 flex-1 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full",
            mode === option.value ? "text-black dark:text-white" : "text-white/60 hover:text-white/80"
          )}
        >
          {mode === option.value && (
            <motion.div
              layoutId="activeSegment"
              className="absolute inset-0 bg-white dark:bg-white/20 rounded-full shadow-sm"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-20 mix-blend-difference">{option.label}</span>
        </button>
      ))}
    </div>
  );
}
