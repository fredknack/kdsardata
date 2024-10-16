// app/api/users/route.js

export async function GET(request) {
    try {
      // Replace with your actual Node.js API URL for fetching users
      const response = await fetch('https://unityazureconnect.azurewebsites.net/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Check if the response is ok
      if (!response.ok) {
        throw new Error('Failed to fetch users data from Node.js API');
      }
  
      // Parse the response as JSON
      const data = await response.json();
  
      // Return the data to the Next.js client
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
  
    } catch (error) {
      console.error('Error fetching users data:', error);
  
      return new Response(JSON.stringify({ message: 'Error fetching users data' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  