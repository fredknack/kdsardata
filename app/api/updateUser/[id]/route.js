// Next.js API route to proxy update request to the Node.js backend for users
export async function PUT(request, { params }) {
    const { id } = params; // Get the User ID from the URL
    
    try {
      const { UserEmail } = await request.json(); // Get the new email from the request body
      
      // Send update request to your Node.js backend
      const response = await fetch(`https://unityazureconnect.azurewebsites.net/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ UserEmail }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update user in Node.js API');
      }
  
      return new Response('User updated successfully', {
        status: 200,
      });
    } catch (error) {
      console.error('Error updating user:', error);
      return new Response(JSON.stringify({ message: 'Error updating user' }), {
        status: 500,
      });
    }
  }
  