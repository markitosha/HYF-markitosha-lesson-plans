import { NextResponse } from 'next/server';

export async function GET(request) {
    return NextResponse.json({
        userId: 123,
        userName: 'johndoe',
        lastName: 'Doe',
        firstName: 'John',
        lastLogin: new Date().toISOString(),
        image_url: '/next.svg',
    });
}
