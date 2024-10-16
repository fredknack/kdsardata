import React from 'react';

export default function AddInstallationModal({ isOpen, onClose, onSave, newInstallation, setNewInstallation }) {
    if (!isOpen) return null; // Don't render the modal if it's not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl mb-4">Add Installation</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Installation Name</label>
                        <input
                            type="text"
                            name="InstallationName"
                            value={newInstallation.InstallationName}
                            onChange={(e) =>
                                setNewInstallation((prev) => ({
                                    ...prev,
                                    InstallationName: e.target.value,
                                }))
                            }
                            className="border rounded w-full py-2 px-3"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Installation Location</label>
                        <select
                            name="InstallationLocation"
                            value={newInstallation.InstallationLocation}
                            onChange={(e) =>
                                setNewInstallation((prev) => ({
                                    ...prev,
                                    InstallationLocation: e.target.value,
                                }))
                            }
                            className="border rounded w-full py-2 px-3"
                        >
                            <option value="Lewisville">Lewisville</option>
                        </select>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                            onClick={onSave}
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
