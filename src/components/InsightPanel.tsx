import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Translation } from '../locales/translations';

interface InsightPanelProps {
  result: {
    creatorEarnings: number;
    robloxFee: number;
    plsDonateFee: number;
  };
  mode: 'standard' | 'plsDonate';
  t: Translation;
}

export function InsightPanel({ result, mode, t }: InsightPanelProps) {
  return (
    <div className="mt-8 w-full max-w-md mx-auto">
      <div className="bg-white/10 backdrop-blur-3xl rounded-3xl p-6 border border-white/10 shadow-2xl">
        <h3 className="text-lg font-semibold text-white/90 mb-4 tracking-wide">{t.title} Breakdown</h3>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <span className="text-white/60 text-sm">{t.creatorEarnings}</span>
            <span className="text-white font-mono font-bold text-lg text-emerald-400">
              {result.creatorEarnings.toLocaleString()}
            </span>
          </div>
          
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <span className="text-white/60 text-sm">{t.robloxFee}</span>
            <span className="text-white font-mono font-bold text-lg text-rose-400">
              {result.robloxFee.toLocaleString()}
            </span>
          </div>
          
          {mode === 'plsDonate' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex justify-between items-center border-b border-white/10 pb-3 overflow-hidden"
            >
              <span className="text-white/60 text-sm">{t.plsDonateFee}</span>
              <span className="text-white font-mono font-bold text-lg text-amber-400">
                {result.plsDonateFee.toLocaleString()}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
