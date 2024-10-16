import { useState, useEffect } from 'react';
import styles from './UserEditModal.module.css'; // Make sure this is the correct path for your CSS

export default function UserEditModal({ user, onClose, onUpdateUser }) {
    const [email, setEmail] = useState('');

    // Populate the email field with the user's current email when modal opens
    useEffect(() => {
        if (user) {
            setEmail(user.UserEmail);
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateUser(user.UserId, email); // Call the update function with userId and new email
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Edit User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.modalActions}>
                        <button type="submit" className="btn btn-primary">Save</button>
                        <button type="button" onClick={onClose} className="btn btn-secondary">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
