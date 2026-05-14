import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Currency } from './types';

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
const WHATSAPP_PHONE_NUMBER = '23057959947';

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

export function detectCurrency(): Currency {
  return 'EUR';
}

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}

function getApiUrl(path: string): string {
  if (API_BASE_URL) {
    return `${API_BASE_URL}${path}`;
  }

  return path;
}

export async function sendEmail(
  recipientEmail: string,
  emailTitle: string,
  emailMessage: string,
) {
  let response: Response;

  try {
    response = await fetch(getApiUrl('/api/send-email'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipientEmail, emailTitle, emailMessage }),
    });
  } catch {
    throw new Error(
      API_BASE_URL
        ? `The email API at ${API_BASE_URL} is unreachable.`
        : 'The email API is unreachable. In development, make sure `npm run dev:server` is running on port 3000.',
    );
  }

  const data = await response.json().catch(() => null);

  if (!response.ok || !data?.success) {
    const details = typeof data?.details === 'string' ? data.details : '';
    throw new Error(data?.error || details || 'Unable to send email right now.');
  }

  return data;
}
