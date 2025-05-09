export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Total Balance</h3>
          <p className="text-2xl font-bold text-gray-900">$24,500.00</p>
          <span className="text-green-600 text-sm">+2.5%</span>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Total Savings</h3>
          <p className="text-2xl font-bold text-gray-900">$12,750.00</p>
          <span className="text-green-600 text-sm">+4.2%</span>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Active Goals</h3>
          <p className="text-2xl font-bold text-gray-900">3</p>
          <span className="text-blue-600 text-sm">In Progress</span>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Interest Earned</h3>
          <p className="text-2xl font-bold text-gray-900">$350.00</p>
          <span className="text-green-600 text-sm">This Month</span>
        </div>
      </div>
    </div>
  );
}
