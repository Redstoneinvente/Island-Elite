import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Currency, Language } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
}

export function formatPrice(amount: number, currency: Currency): string {
  const symbols: Record<Currency, string> = {
    MUR: 'Rs',
    EUR: '€',
    USD: '$',
    GBP: '£',
    ZAR: 'R',
    RUB: '₽',
    CNY: '¥',
  };
  
  const symbol = symbols[currency] || currency;
  return `${symbol} ${amount.toLocaleString()}`;
}

// Mock IP detection for currency
export function detectCurrency(): Currency {
  // In a real app, this would use an IP geolocation service
  return 'EUR'; 
}

export async function sendEmail(recipientEmail: string, emailTitle: string, emailMessage: string) {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ recipientEmail, emailTitle, emailMessage }),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok || !data?.success) {
    throw new Error(data?.error || 'Unable to send email right now.');
  }

  return data;
}
