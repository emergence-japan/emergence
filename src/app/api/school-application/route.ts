import { NextResponse } from 'next/server';

const GAS_ENDPOINT = "https://script.google.com/macros/s/AKfycbx52acHalgZJcykRFcjn87nPW056hIQ73fAtqnradQKeq2RwHrUsPWm1WPL8uWf0PAq5g/exec";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // GASにデータを送信
    const response = await fetch(GAS_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (result.status === 'success') {
      return NextResponse.json({ status: 'success' });
    } else {
      console.error('GAS error:', result.error);
      return NextResponse.json({ status: 'error', error: result.error }, { status: 500 });
    }
  } catch (error) {
    console.error('API Route error:', error);
    return NextResponse.json({ status: 'error', error: 'Internal Server Error' }, { status: 500 });
  }
}
