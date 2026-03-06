import { useState, useEffect, useCallback } from 'react';

export type TaxMode = 'standard' | 'plsDonate';

interface TaxResult {
  beforeTax: number;
  afterTax: number;
  robloxFee: number;
  plsDonateFee: number;
  creatorEarnings: number;
}

export function useTaxCalculator() {
  const [mode, setMode] = useState<TaxMode>('standard');
  const [beforeTax, setBeforeTax] = useState<string>('');
  const [afterTax, setAfterTax] = useState<string>('');
  const [result, setResult] = useState<TaxResult>({
    beforeTax: 0,
    afterTax: 0,
    robloxFee: 0,
    plsDonateFee: 0,
    creatorEarnings: 0,
  });

  const calculate = useCallback((value: number, type: 'before' | 'after', currentMode: TaxMode) => {
    let calculatedBefore = 0;
    let calculatedAfter = 0;

    if (type === 'before') {
      calculatedBefore = value;
      if (currentMode === 'standard') {
        calculatedAfter = Math.floor(value * 0.7);
      } else {
        calculatedAfter = Math.floor(value * 0.6);
      }
    } else {
      calculatedAfter = value;
      if (currentMode === 'standard') {
        calculatedBefore = Math.ceil(value / 0.7);
      } else {
        calculatedBefore = Math.ceil(value / 0.6);
      }
    }

    const robloxFee = Math.ceil(calculatedBefore * 0.3);
    const plsDonateFee = currentMode === 'plsDonate' ? Math.ceil(calculatedBefore * 0.1) : 0;
    const creatorEarnings = calculatedAfter;

    return {
      beforeTax: calculatedBefore,
      afterTax: calculatedAfter,
      robloxFee,
      plsDonateFee,
      creatorEarnings,
    };
  }, []);

  const handleBeforeTaxChange = (value: string) => {
    if (value === '') {
      setBeforeTax('');
      setAfterTax('');
      setResult({ beforeTax: 0, afterTax: 0, robloxFee: 0, plsDonateFee: 0, creatorEarnings: 0 });
      return;
    }
    
    const numValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
    if (isNaN(numValue)) return;

    setBeforeTax(numValue.toString());
    const res = calculate(numValue, 'before', mode);
    setAfterTax(res.afterTax.toString());
    setResult(res);
  };

  const handleAfterTaxChange = (value: string) => {
    if (value === '') {
      setAfterTax('');
      setBeforeTax('');
      setResult({ beforeTax: 0, afterTax: 0, robloxFee: 0, plsDonateFee: 0, creatorEarnings: 0 });
      return;
    }

    const numValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
    if (isNaN(numValue)) return;

    setAfterTax(numValue.toString());
    const res = calculate(numValue, 'after', mode);
    setBeforeTax(res.beforeTax.toString());
    setResult(res);
  };

  // Recalculate when mode changes, keeping the "Before Tax" value as the source of truth if it exists
  useEffect(() => {
    if (beforeTax) {
      handleBeforeTaxChange(beforeTax);
    }
  }, [mode]);

  return {
    mode,
    setMode,
    beforeTax,
    afterTax,
    result,
    handleBeforeTaxChange,
    handleAfterTaxChange,
  };
}
