import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
            <div className="flex items-center">
                <div className="logo mr-6">
                    
                    <img src="/images/KDS-Web-Logo.png" alt="Logo" className="h-10" />
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/users">-Users-</Link>
                        </li>
                        <li>
                            <Link href="/learner-data">Activity</Link>
                        </li>
                        <li>
                            <Link href="/installations">Installations</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="auth-placeholder">
                <p>Login/Logout Placeholder</p>
            </div>
        </header>
    );
}

