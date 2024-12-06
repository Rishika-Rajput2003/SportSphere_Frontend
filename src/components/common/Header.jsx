const Header = ({ setIsModalOpen }) => (
  <header className="flex justify-between items-center">
    <h2 className="text-2xl font-bold">Schedule</h2>
    <button
      className="bg-[#355e9f] text-white px-4 py-2 rounded-lg transform transition-all hover:bg-[#2a4977]"
      onClick={() => setIsModalOpen(true)}
    >
      + New Customer
    </button>
  </header>
);

export default Header;
