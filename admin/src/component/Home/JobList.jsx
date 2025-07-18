import React from "react";

const users = [
  {
    id: 1,
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    title: "Front-end Developer",
    department: "Optimization",
    status: "Active",
    role: "Member",
  },
  {
    id: 2,
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    avatar: "https://i.pravatar.cc/150?img=2",
    title: "Designer",
    department: "Intranet",
    status: "Active",
    role: "Admin",
  },
  {
    id: 3,
    name: "Tom Cook",
    email: "tom.cook@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
    title: "Director of Product",
    department: "Directives",
    status: "Active",
    role: "Member",
  },
  // ...more dummy users
];

const JobList = () => {
  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Users</h2>
          <p className="text-sm text-gray-500">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <button className="bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 px-4 rounded">
          Create Job
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Company Name</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Job Title</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Role</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map(user => (
              <tr key={user.id}>
                <td className="px-6 py-4 flex items-center gap-4">
                  <span className="h-10 w-10 text-2xl font-semibold rounded-full bg-purple-200 flex items-center justify-center">{user.name.slice(0,1)}</span>
                  <div>
                    <div className="font-medium text-gray-900">{user.name}</div>
                    <div className="text-gray-500 text-xs">{user.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-gray-900">{user.title}</div>
                  <div className="text-gray-500 text-xs">{user.department}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-900">{user.role}</td>
                <td className="px-6 py-4 text-sm text-violet-600 hover:underline cursor-pointer">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
