"use client"; // Mark this as a client component

import { useFetchLearnerData } from '../../hooks/useFetchLearnerData';
import axios from 'axios';
import Layout from '../../app/layout';
// Import the global Layout component

export default function DataPage() {
  const apiUrl = 'https://unityazureconnect.azurewebsites.net/api/getLearnerData';
  
  const { data, loading, error, refetch } = useFetchLearnerData(apiUrl);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://unityazureconnect.azurewebsites.net/api/learnerData/${id}`);
      refetch();  // Refetch data after deletion
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
                <th colSpan="7" className="bg-[#FFEAA9] text-2xl font-bold p-4 text-center">Learner Data</th>
              </tr>
              <tr className="bg-gray-200">
                <th className="px-2 py-1">UserId</th>
                <th className="px-2 py-1">Email</th>
                <th className="px-2 py-1">Time Spent</th>
                <th className="px-2 py-1">Installation Name</th>
                <th className="px-2 py-1">Installation Location</th>
                <th className="px-2 py-1">Percentage Complete</th>
                <th className="px-2 py-1">Actions</th>
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
                      className="button-delete mr-2" 
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
