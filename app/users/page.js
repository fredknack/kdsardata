"use client"; // Ensure the component is treated as a client-side component

import { useFetchLearnerData } from '../../hooks/useFetchLearnerData';
import { useRouter } from 'next/navigation'; // Updated import for useRouter
import Layout from '../../app/layout';
// Import the global Layout component

export default function UsersPage() {
  const apiUrl = 'https://unityazureconnect.azurewebsites.net/api/users';
  
  const { data, loading, error } = useFetchLearnerData(apiUrl);
  const router = useRouter();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleRowClick = (userId) => {
    router.push(`/user-data/${userId}`); // Next.js 13 routing
  };

  return (
    <Layout>
      <div className="w-full bg-[#E6E6E6] p-4"> {/* Added consistent background */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-full table-auto bg-white">
            <thead>
              <tr>
                <th colSpan="3" className="bg-[#FFEAA9] text-2xl font-bold p-4 text-center">Users</th>
              </tr>
              <tr className="bg-gray-200">
                <th className="px-2 py-1">UserId</th>
                <th className="px-2 py-1">Email</th>
                <th className="px-2 py-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.UserId} className="cursor-pointer" onClick={() => handleRowClick(user.UserId)}>
                  <td className="border px-2 py-1">{user.UserId}</td>
                  <td className="border px-2 py-1">{user.UserEmail}</td>
                  <td className="border px-2 py-1">View Activity</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
