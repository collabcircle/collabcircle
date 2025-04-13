'use client';
import React, { useState, useEffect } from 'react';

export const TypingText = ({ phrases }) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < phrases[index].length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + phrases[index][charIndex]);
        setCharIndex(prev => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const hold = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText('');
        setIndex((index + 1) % phrases.length);
      }, 1500);
      return () => clearTimeout(hold);
    }
  }, [charIndex, index, phrases]);

  return (
    <h1 className="text-[60px] sm:text-[80px] md:text-[100px] font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-black to-red-600">
      {displayedText}
      <span className="inline-block w-2 h-10 bg-black ml-1 animate-blink" />
    </h1>
  );
};
