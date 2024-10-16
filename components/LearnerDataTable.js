import React from 'react';

export default function LearnerDataTable({ data, onDelete, onEdit }) {
  return (
    <div className="container mx-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">LearnerDataId</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Time Spent</th>
            <th className="px-4 py-2">Installation ID</th>
            <th className="px-4 py-2">Percentage Complete</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((learner) => (
            <tr key={learner.LearnerDataId}>
              <td className="border px-4 py-2">{learner.LearnerDataId}</td>
              <td className="border px-4 py-2">{learner.Email}</td>
              <td className="border px-4 py-2">{learner.TimeSpent}</td>
              <td className="border px-4 py-2">{learner.InstallationID}</td>
              <td className="border px-4 py-2">{learner.PercentageComplete}</td>
              <td className="border px-4 py-2">
                {/* Delete Button */}
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-2"
                  onClick={() => onDelete(learner.LearnerDataId)}
                >
                  Delete
                </button>

                {/* Edit Button */}
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => onEdit(learner)}  // Pass the learner data to the onEdit function
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
