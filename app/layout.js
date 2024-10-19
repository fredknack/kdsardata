// D:\0-EMU-Projects\azure\lxdardata\app\layout.js

import '../styles/globals.css'; 

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>KDS AR Portal</title>
            </head>
            <body className="bg-white">
                <div className="min-h-screen bg-white flex items-center justify-center">
                    <div className="w-4/5 bg-[#E6E6E6] flex flex-col min-h-screen">
                        {/* Header */}
                        <header className="bg-[#FFDB50] w-full">
                            <div className="flex justify-between items-center p-4">
                                <div className="flex items-center">
                                    <div className="logo mr-6">
                                        <img src="/images/KDS-Web-Logo.png" alt="Logo" className="h-10" />
                                    </div>
                                    <nav className="space-x-4">
                                        <a href="/users" className="text-[#1A1446] font-bold">Users</a>
                                        <a href="/learner-data" className="text-[#1A1446] font-bold">Activity</a>
                                        <a href="/installations" className="text-[#1A1446] font-bold">Installations</a>
                                    </nav>
                                </div>
                                <div className="text-[#1A1446] font-bold">Login/Logout</div>
                            </div>
                        </header>

                        {/* Main Content */}
                        <main className="flex-grow w-full p-2">
                            <div className="bg-white w-full p-4">
                                {children}
                            </div>
                        </main>

                        {/* Footer */}
                        <footer className="bg-gray-800 text-white w-full mt-auto p-4">
                            <div className="text-right">Placeholder</div>
                        </footer>
                    </div>
                </div>
            </body>
        </html>
    );
}
