// app/api/getLearnerData/route.js

export async function GET(request) {
  try {
    // Replace with your actual Node.js API URL (unityazureconnect Node.js app)
    const response = await fetch('https://unityazureconnect.azurewebsites.net/api/getLearnerData', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check if the response is ok
    if (!response.ok) {
      throw new Error('Failed to fetch data from Node.js API');
    }

    // Parse the response as JSON
    const data = await response.json();

    // Return the data to the Next.js client
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error fetching data:', error);

    return new Response(JSON.stringify({ message: 'Error fetching data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
