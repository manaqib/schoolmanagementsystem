const navItems = [
  'Dashboard',
  'Students',
  'Classes',
  'Attendance',
  'Tests & Exams',
  'Fees',
  'Results',
  'Exam Schedule',
  'Leave Management',
  'Settings',
]

const Sidebar = ({ activeSection, onSelectSection, isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <nav>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item}>
              <button
                className={`nav-item ${activeSection === item ? 'active' : ''}`}
                onClick={() => onSelectSection(item)}
              >
                <span>{item}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
