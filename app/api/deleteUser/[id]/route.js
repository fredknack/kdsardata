// Next.js API route to proxy delete request to the Node.js backend for users
export async function DELETE(request, { params }) {
    const { id } = params; // Get the User ID from the URL
    
    try {
      // Send delete request to your Node.js backend
      const response = await fetch(`https://unityazureconnect.azurewebsites.net/api/users/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete user from Node.js API');
      }
  
      return new Response('User deleted successfully', {
        status: 200,
      });
    } catch (error) {
      console.error('Error deleting user:', error);
      return new Response(JSON.stringify({ message: 'Error deleting user' }), {
        status: 500,
      });
    }
  }
  