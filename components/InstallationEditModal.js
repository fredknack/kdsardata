import { useState, useEffect } from 'react';

export default function InstallationEditModal({ isOpen, onClose, onSave, installation }) {
    const [formData, setFormData] = useState({
        InstallationName: '',
        InstallationLocation: ''
    });

    useEffect(() => {
        if (installation) {
            setFormData({
                InstallationName: installation.InstallationName,
                InstallationLocation: installation.InstallationLocation
            });
        }
    }, [installation]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onSave({ ...installation, ...formData }); // Make sure the updated formData is being sent to the parent
        onClose(); // Close modal after saving
    };

    if (!isOpen) return null; // Don't render if not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl mb-4">Edit Installation</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Installation Name</label>
                        <input
                            type="text"
                            name="InstallationName"
                            value={formData.InstallationName}
                            onChange={handleChange}
                            className="border rounded w-full py-2 px-3"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Installation Location</label>
                        <input
                            type="text"
                            name="InstallationLocation"
                            value={formData.InstallationLocation}
                            onChange={handleChange}
                            className="border rounded w-full py-2 px-3"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                            onClick={handleSave}
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
