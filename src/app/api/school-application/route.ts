import { NextResponse } from 'next/server';

const GAS_ENDPOINT = "https://script.google.com/macros/s/AKfycbwHDF2tfIcniL9qDKT_7-oF8tJmuI1ezOhZLgAWoFfdgRrHHrVPP6FrHRSnEHgYWN3A/exec";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // GASが最も確実に受け取れる形式に変換
    const params = new URLSearchParams();
    Object.keys(data).forEach(key => params.append(key, String(data[key])));

    const response = await fetch(GAS_ENDPOINT, {
      method: 'POST',
      body: params.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch (e) {
      console.error('GAS response is not JSON:', text);
      throw new Error('GASからの応答が不正です');
    }

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
