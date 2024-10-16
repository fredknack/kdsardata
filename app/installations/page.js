"use client"; // Mark this as a client component

import { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../app/layout';

import AddInstallationModal from '../../components/AddInstallationModal';
import InstallationEditModal from '../../components/InstallationEditModal'; // Import the InstallationEditModal

export default function InstallationsPage() {
    const [installations, setInstallations] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedInstallation, setSelectedInstallation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hasMounted, setHasMounted] = useState(false);
    const [newInstallation, setNewInstallation] = useState({
        InstallationName: '',
        InstallationLocation: 'Lewisville',
    });

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (hasMounted) {
            fetchInstallations();
        }
    }, [hasMounted]);

    const fetchInstallations = async () => {
        try {
            const response = await axios.get('https://unityazureconnect.azurewebsites.net/api/installations');
            setInstallations(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching installations:', error);
            setLoading(false);
        }
    };

    const handleDeleteInstallation = async (installationId) => {
        try {
            console.log(`Attempting to delete installation with ID: ${installationId}`);
            const response = await axios.delete(`https://unityazureconnect.azurewebsites.net/api/installations/${installationId}`);
            console.log('Delete response:', response);
            fetchInstallations(); // Refresh the installation list
        } catch (error) {
            console.error('Error deleting installation:', error);
        }
    };

    const handleAddInstallation = () => {
        setIsAddModalOpen(true);
    };

    const closeAddModal = () => {
        setIsAddModalOpen(false);
        setNewInstallation({ InstallationName: '', InstallationLocation: 'Lewisville' });
    };

    const handleSaveNewInstallation = async () => {
        try {
            await axios.post('https://unityazureconnect.azurewebsites.net/api/installations', newInstallation);
            fetchInstallations(); // Refresh the installation list
            closeAddModal();
        } catch (error) {
            console.error('Error adding installation:', error);
        }
    };

    const handleEditInstallation = (installation) => {
        setSelectedInstallation(installation); // Set the selected installation for editing
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setSelectedInstallation(null);
    };

    const handleSaveEditedInstallation = async (updatedInstallation) => {
        try {
            await axios.put(
                `https://unityazureconnect.azurewebsites.net/api/installations/${updatedInstallation.InstallationId}`,
                {
                    InstallationName: updatedInstallation.InstallationName,
                    InstallationLocation: updatedInstallation.InstallationLocation
                }
            );
            fetchInstallations(); // Refresh the list after updating
            closeEditModal(); // Close the modal after saving
        } catch (error) {
            console.error('Error saving installation:', error);
        }
    };

    if (!hasMounted) {
        return null;
    }

    if (loading) {
        return (
            <Layout pageTitle="Installations">
                <div className="w-full p-4 bg-white">
                    <p>Loading...</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout pageTitle="Installations"> {/* Using Layout with a page title */}
            <div className="w-full p-4 bg-white">
                <table className="w-full table-auto bg-white">
                    <thead>
                        {/* Add Installation Button Row */}
                        <tr>
                            <th colSpan="3" className="text-left p-4">
                                <button
                                    className="button-primary mr-2"
                                    onClick={handleAddInstallation}
                                >
                                    Add Installation
                                </button>
                            </th>
                        </tr>
                        {/* Page Title Row */}
                        <tr>
                            <th colSpan="3" className="bg-[#FFEAA9] text-2xl font-bold p-4 text-center">Installations</th>
                        </tr>
                        {/* Table Header */}
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Installation Name</th>
                            <th className="px-4 py-2">Installation Location</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {installations.map((installation) => (
                            <tr key={installation.InstallationId}>
                                <td className="border px-4 py-2">{installation.InstallationName}</td>
                                <td className="border px-4 py-2">{installation.InstallationLocation}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        className="button-primary mr-2"
                                        onClick={() => handleEditInstallation(installation)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="button-delete mr-2"
                                        onClick={() => handleDeleteInstallation(installation.InstallationId)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Add Installation Modal */}
                {isAddModalOpen && (
                    <AddInstallationModal
                        isOpen={isAddModalOpen}
                        onClose={closeAddModal}
                        onSave={handleSaveNewInstallation}
                        newInstallation={newInstallation}
                        setNewInstallation={setNewInstallation}
                    />
                )}

                {/* Edit Installation Modal */}
                {isEditModalOpen && selectedInstallation && (
                    <InstallationEditModal
                        isOpen={isEditModalOpen}
                        onClose={closeEditModal}
                        onSave={handleSaveEditedInstallation}
                        installation={selectedInstallation}
                    />
                )}
            </div>
        </Layout>
    );
}
