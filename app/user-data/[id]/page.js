"use client"; // Ensure the component is treated as a client-side component

import { useFetchLearnerData } from '../../../hooks/useFetchLearnerData';
import { useParams } from 'next/navigation'; // Import useParams for dynamic routing
import axios from 'axios'; // Import axios for handling delete requests
import Layout from '../../../app/layout';
// Import the global Layout component

export default function UserDataPage() {
  const params = useParams(); // Hook to get dynamic segments
  const userId = params.id; // Get the dynamic id from the URL

  const apiUrl = `https://unityazureconnect.azurewebsites.net/api/getLearnerData/${userId}`;
  
  const { data, loading, error, refetch } = useFetchLearnerData(apiUrl);

  const handleDelete = async (learnerDataId) => {
    try {
      await axios.delete(`https://unityazureconnect.azurewebsites.net/api/learnerData/${learnerDataId}`); // Use existing backend API route
      refetch(); // Refetch data after deletion to update the table
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Layout>
      <div className="w-full bg-[#E6E6E6] p-4"> {/* Added consistent background */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-full table-auto bg-white">
            {/* Title row */}
            <thead>
              <tr>
                <th colSpan="8" className="bg-[#FFEAA9] text-2xl font-bold p-4 text-center">User Activity Data</th>
              </tr>
              <tr className="bg-gray-200">
                <th className="px-2 py-1">UserId</th>
                <th className="px-2 py-1">Email</th>
                <th className="px-2 py-1">Time Spent</th>
                <th className="px-2 py-1">Installation Name</th>
                <th className="px-2 py-1">Installation Location</th>
                <th className="px-2 py-1">Percentage Complete</th>
                <th className="px-2 py-1">Actions</th> {/* Actions column for delete button */}
              </tr>
            </thead>
            <tbody>
              {data.map((learner) => (
                <tr key={learner.LearnerDataId}>
                  <td className="border px-2 py-1">{learner.UserId}</td>
                  <td className="border px-2 py-1">{learner.UserEmail}</td>
                  <td className="border px-2 py-1">{learner.TimeSpent}</td>
                  <td className="border px-2 py-1">{learner.InstallationName}</td>
                  <td className="border px-2 py-1">{learner.InstallationLocation}</td>
                  <td className="border px-2 py-1">{learner.PercentageComplete}%</td>
                  <td className="border px-2 py-1">
                    <button 
                      className="button-delete mr-2 bg-red-500 text-white px-3 py-1 rounded" 
                      onClick={() => handleDelete(learner.LearnerDataId)}
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
