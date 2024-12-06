const Sidebar = () => {
  return (
    <div className="w-64 bg-[#1e2b44] text-white h-full flex flex-col">
      <div className="flex items-center px-4 py-6 text-xl font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12 mr-4">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#0077b6', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#00b7ff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#0077b6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <g fill="url(#grad1)">
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z" />
            <path d="M351.2 217L263.9 173c-11.7-5.2-26.9-.9-32.1 10.8-5.2 11.7-.9 26.9 10.8 32.1l56.4 25.2c4.4 2 6.8 5.1 6.9 9.4.1 4.3-2.2 7.8-6.5 10.4L208.1 299.4c-12.4 7.8-16.8 23.5-9 35.9 7.8 12.4 23.5 16.8 35.9 9l93.4-58.8c31.9-20.1 49.6-55.5 49.6-93 .1-32-13.5-62.4-37.8-82.5z" />
          </g>
        </svg>
        <span className="tracking-widest">NEXUS</span>
      </div>
      <nav className="mt-6">
        <a href="#" className="block px-4 py-3 hover:bg-gray-700 flex items-center space-x-3">
          {/* Dashboard Icon */}
          <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12h18M3 6h18M3 18h18"></path>
          </svg>
          <span>Dashboard</span>
        </a>
        <a href="#" className="block px-4 py-3 bg-[#4472c4] hover:bg-[#2a4977] flex items-center space-x-3">
          {/* Schedule Icon */}
          <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM12 11v6m-3-3h6"></path>
          </svg>
          <span>Schedule</span>
        </a>
        <a href="#" className="block px-4 py-3 hover:bg-gray-700 flex items-center space-x-3">
          {/* Customers Icon */}
          <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zM12 14c-3.3 0-6 1.7-6 3v2h12v-2c0-1.3-2.7-3-6-3z"></path>
          </svg>
          <span>Customers</span>
        </a>
        <a href="#" className="block px-4 py-3 hover:bg-gray-700 flex items-center space-x-3">
          {/* Football Icon */}
          <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2v4m0 16v-4m-10-6h4m16 0h-4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path>
          </svg>
          <span>Coachings</span>
        </a>
        <a href="#" className="block px-4 py-3 hover:bg-gray-700 flex items-center space-x-3">
          {/* Group of People Icon */}
          <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>Attendance</span>
        </a>
      </nav>
      <div className="mt-auto p-4">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-700 p-2 rounded-full">
            <span className="text-sm">RR</span>
          </div>
          <div>
            <p>Admin</p>
            <p className="text-sm text-gray-400">Rishika Rajput</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;