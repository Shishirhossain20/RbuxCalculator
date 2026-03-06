import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, Calculator } from 'lucide-react';
import { useTaxCalculator } from './hooks/useTaxCalculator';
import { useLocalization } from './hooks/useLocalization';
import { useTheme } from './hooks/useTheme';
import { GlassInputCard } from './components/GlassInputCard';
import { SegmentedControl } from './components/SegmentedControl';
import { InsightPanel } from './components/InsightPanel';
import { SettingsModal } from './components/SettingsModal';
import { cn } from './lib/utils';

export default function App() {
  const {
    mode,
    setMode,
    beforeTax,
    afterTax,
    result,
    handleBeforeTaxChange,
    handleAfterTaxChange,
  } = useTaxCalculator();

  const { language, setLanguage, t, dir } = useLocalization();
  const { theme, toggleTheme } = useTheme();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className={cn(
      "min-h-screen w-full overflow-hidden relative transition-colors duration-700 font-sans",
      "bg-gradient-to-br from-indigo-900 via-slate-900 to-black",
      "text-white selection:bg-indigo-500/30",
      dir === 'rtl' ? 'rtl' : 'ltr'
    )}>
      {/* Dynamic Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/30 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow delay-2000" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl shadow-lg shadow-indigo-500/20">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            {t.title}
          </h1>
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSettingsOpen(true)}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
        >
          <Settings className="w-5 h-5 text-white/80" />
        </motion.button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 pt-28 pb-12 max-w-5xl flex flex-col items-center min-h-screen justify-center">
        
        {/* Mode Toggle */}
        <div className="mb-12 w-full max-w-sm">
          <SegmentedControl
            mode={mode}
            setMode={setMode}
            options={[
              { value: 'standard', label: t.modeStandard },
              { value: 'plsDonate', label: t.modePlsDonate },
            ]}
          />
        </div>

        {/* Input Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl relative">
          {/* Arrow Indicator */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white/50">
            {dir === 'rtl' ? '←' : '→'}
          </div>

          <GlassInputCard
            label={t.beforeTax}
            value={beforeTax}
            onChange={handleBeforeTaxChange}
            dir={dir}
          />
          
          <GlassInputCard
            label={t.afterTax}
            value={afterTax}
            onChange={handleAfterTaxChange}
            dir={dir}
          />
        </div>

        {/* Insight Panel */}
        <AnimatePresence mode="wait">
          {(result.beforeTax > 0 || result.afterTax > 0) && (
            <motion.div
              key="insight-panel-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full"
            >
              <InsightPanel
                result={result}
                mode={mode}
                t={t}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.footer
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-12 text-center text-white/60 text-sm max-w-md mx-auto font-medium"
        >
          <p>{t.donate}</p>
        </motion.footer>

      </main>

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
        t={t}
        dir={dir}
      />
    </div>
  );
}
