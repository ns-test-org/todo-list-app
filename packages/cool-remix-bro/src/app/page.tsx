'use client';

import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperation = (op: string) => {
    const current = parseFloat(display);
    
    if (previousValue === null) {
      setPreviousValue(current);
    } else if (operation) {
      const result = calculate(previousValue, current, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }
    
    setOperation(op);
    setNewNumber(true);
  };

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b !== 0 ? a / b : 0;
      default: return b;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const current = parseFloat(display);
      const result = calculate(previousValue, current, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleDecimal = () => {
    if (newNumber) {
      setDisplay('0.');
      setNewNumber(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl shadow-2xl p-6 w-full max-w-sm border border-slate-700/50">
        <div className="bg-slate-900/80 rounded-2xl p-6 mb-6 min-h-[100px] flex items-end justify-end">
          <div className="text-5xl font-light text-white break-all text-right">
            {display}
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          <button onClick={handleClear} className="col-span-2 bg-red-500/80 hover:bg-red-600 text-white rounded-xl p-6 text-xl font-semibold transition-all active:scale-95">
            AC
          </button>
          <button onClick={() => handleOperation('÷')} className="bg-orange-500/80 hover:bg-orange-600 text-white rounded-xl p-6 text-2xl font-semibold transition-all active:scale-95">
            ÷
          </button>
          <button onClick={() => handleOperation('×')} className="bg-orange-500/80 hover:bg-orange-600 text-white rounded-xl p-6 text-2xl font-semibold transition-all active:scale-95">
            ×
          </button>
          
          <button onClick={() => handleNumber('7')} className="bg-slate-700/80 hover:bg-slate-600 text-white rounded-xl p-6 text-2xl font-semibold transition-all active:scale-95">
            7
          </button>
          <button onClick={() => handleNumber('8')} className="bg-slate-700/80 hover:bg-slate-600 text-white rounded-xl p-6 text-2xl font-semibold transition-all active:scale-95">
            8
          </button>
          <button onClick={() => handleNumber('9')} className="bg-slate-700/80 hover:bg-slate-600 text-white rounded-xl p-6 text-2xl font-semibold transition-all active:scale-95">
            9
          </button>
          <button onClick={() => handleOperation('-')} className="bg-orange-500/80 hover:bg-orange-600 text-white rounded-xl p-6 text-2xl font-semibold transition-all active:scale-95">
            −
          </button>
          
          <button onClick={() => handleNumber('4')} className="bg-slate-700/80 hover:bg-slate-600 text-white rounded-xl p-6 text-2xl font-semibold transition-all active:scale-95">
            4
          </button>
          <button onClick={() => handleNumber('5')} className="bg-slate-700/80 hover:bg-slate-600 text-white rounded-xl p-6 text-2xl font-semibold transition-all active:scale-95">
            5
          </button>
          <button onClick={() => handleNumber('6')} className="bg-slate-700/80 hover:bg-slate-600 text-white rounded-xl p-6 text-2xl font-semibold transition-all active:scale-95">
            6
          </button>
          <button onClick={() => handleOperation('+')} className="bg-orange-500/80 hover:bg-orange-600 text-white rounded-xl p-6 text-2xl font-semibold transition-all active:scale-95">
            +
          </button>
          
          <button onClick={() => handleNumber('1')} className="bg-slate-700/80 hover:bg-slate-600 text-white rounded-xl p-6 text-2xl font-semibold transition-all active:scale-95">
            1
          </button>
          <button onClick={() => handleNumber('2')} className="bg-slate-700/80 hover:bg-slate-600 text-white rounded-xl p-6 text-2xl font-semibold transition-all active:scale-95">
            2
          </button>
          <button onClick={() => handleNumber('3')} className="bg-slate-700/80 hover:bg-slate-600 text-white rounded-xl p-6 text-2xl font-semibold transition-all active:scale-95">
            3
          </button>
          <button onClick={handleEquals} className="row-span-2 bg-green-500/80 hover:bg-green-600 text-white rounded-xl p-6 text-2xl font-semibold transition-all active:scale-95">
            =
          </button>
          
          <button onClick={() => handleNumber('0')} className="col-span-2 bg-slate-700/80 hover:bg-slate-600 text-white rounded-xl p-6 text-2xl font-semibold transition-all active:scale-95">
            0
          </button>
          <button onClick={handleDecimal} className="bg-slate-700/80 hover:bg-slate-600 text-white rounded-xl p-6 text-2xl font-semibold transition-all active:scale-95">
            .
          </button>
        </div>
      </div>
    </div>
  );
}

