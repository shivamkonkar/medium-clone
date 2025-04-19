import { fetchQuote } from '../utils/quotes';
import { useState, useEffect } from 'react';

export const Quote = () => {
  const [quote, setQuote] = useState({ text: '', author: '', designation: '' });

  useEffect(() => {
    setQuote(fetchQuote());
  }, []);

  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col px-4">
      <div className="flex justify-center">
        <div className="max-w-xl text-center">
          <p className="text-2xl font-semibold mb-4">“{quote.text}”</p>
          <p className="text-lg font-medium text-gray-700 mt-6">{quote.author}</p>
          <p className="text-sm text-gray-500">{quote.designation}</p>
        </div>
      </div>
    </div>
  );
};
