"use client"; // Ensure the component is treated as a client-side component

import { useFetchLearnerData } from '../../hooks/useFetchLearnerData';
import { useRouter } from 'next/navigation'; // Updated import for useRouter
import axios from 'axios'; // Import axios for delete requests
import Layout from '../../app/layout';
// Import the global Layout component

export default function UsersPage() {
  const apiUrl = 'https://unityazureconnect.azurewebsites.net/api/users';
  
  const { data, loading, error, refetch } = useFetchLearnerData(apiUrl);
  const router = useRouter();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleRowClick = (userId) => {
    router.push(`/user-data/${userId}`); // Next.js 13 routing
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`https://unityazureconnect.azurewebsites.net/api/deleteUserWithLearnerData/${userId}`);
      refetch(); // Refetch data after deletion to update the table
    } catch (error) {
      console.error('Error deleting user and associated data:', error);
    }
  };

  return (
    <Layout>
      <div className="w-full bg-[#E6E6E6] p-4"> {/* Added consistent background */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-full table-auto bg-white">
            <thead>
              <tr>
                <th colSpan="4" className="bg-[#FFEAA9] text-2xl font-bold p-4 text-center">Users</th>
              </tr>
              <tr className="bg-gray-200">
                <th className="px-2 py-1">UserId</th>
                <th className="px-2 py-1">Email</th>
                <th className="px-2 py-1">Actions</th>
                <th className="px-2 py-1">Delete</th> {/* New Delete column */}
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.UserId} className="cursor-pointer">
                  <td className="border px-2 py-1" onClick={() => handleRowClick(user.UserId)}>{user.UserId}</td>
                  <td className="border px-2 py-1" onClick={() => handleRowClick(user.UserId)}>{user.UserEmail}</td>
                  <td className="border px-2 py-1 cursor-pointer" onClick={() => handleRowClick(user.UserId)}>
                    View Activity
                  </td>
                  <td className="border px-2 py-1">
                    <button 
                      className="button-delete bg-red-500 text-white px-3 py-1 rounded" 
                      onClick={() => handleDeleteUser(user.UserId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
