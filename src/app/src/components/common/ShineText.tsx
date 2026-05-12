import { useState, useEffect } from 'react';
import './ShineText.css';

interface ShineTextProps {
  text: string;
}

export function ShineText({ text }: ShineTextProps) {
  return (
    <span className="shine-text">
      {text}
    </span>
  );
}
