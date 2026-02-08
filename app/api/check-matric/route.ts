import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGODB_URI!;

async function getDatabase() {
  const client = new MongoClient(mongoUri);
  await client.connect();
  return client.db('vision_tutor');
}

export async function POST(request: NextRequest) {
  const { matricNumber } = await request.json();

  if (!matricNumber) {
    return NextResponse.json(
      { error: 'Matric number is required' },
      { status: 400 }
    );
  }

  try {
    const db = await getDatabase();
    const usersCollection = db.collection('users');

    // Check if user with this matric number exists
    const existingUser = await usersCollection.findOne({
      matricNumber: matricNumber.toUpperCase(),
    });

    return NextResponse.json({
      exists: !!existingUser,
    });
  } catch (error) {
    console.error('Error checking matric number:', error);
    return NextResponse.json(
      { error: 'Failed to check matric number' },
      { status: 500 }
    );
  }
}