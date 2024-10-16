// Next.js API route to proxy delete request to the Node.js backend
export async function DELETE(request, { params }) {
    const { id } = params;  // Get the ID from the URL
    
    try {
      // Send delete request to your Node.js backend
      const response = await fetch(`https://unityazureconnect.azurewebsites.net/api/deleteLearner/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete data from Node.js API');
      }
  
      return new Response('Learner deleted successfully', {
        status: 200,
      });
    } catch (error) {
      console.error('Error deleting learner:', error);
      return new Response(JSON.stringify({ message: 'Error deleting learner' }), {
        status: 500,
      });
    }
  }
  