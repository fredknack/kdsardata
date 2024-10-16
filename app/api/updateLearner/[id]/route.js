import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  const { id } = params;
  const updatedLearner = await request.json();  // Parse the incoming JSON

  try {
    // Make a PUT request to your Node.js backend to update the learner
    const response = await fetch(`https://unityazureconnect.azurewebsites.net/api/updateLearner/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedLearner),
    });

    if (!response.ok) {
      throw new Error('Failed to update data in Node.js API');
    }

    return NextResponse.json({ message: 'Learner updated successfully' });
  } catch (error) {
    console.error('Error updating learner:', error);
    return NextResponse.json({ message: 'Error updating learner' }, { status: 500 });
  }
}
