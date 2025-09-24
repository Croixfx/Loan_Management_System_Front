export default function Dashboard() {
  const user = localStorage.getItem("token"); // Example, you may store more user data later

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6 shadow-md">
        <h1 className="text-xl font-bold">Loan Management Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
          {user ? (
            <p className="text-gray-700">
              You are logged in. More dashboard features coming soon!
            </p>
          ) : (
            <p className="text-red-500">
              You are not logged in. Please log in to continue.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
