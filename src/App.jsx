import { useMemo, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import Classes from './pages/Classes'
import Attendance from './pages/Attendance'
import Tests from './pages/Tests'
import Fees from './pages/Fees'
import Results from './pages/Results'
import ExamSchedulePage from './pages/ExamSchedulePage'
import LeaveManagement from './pages/LeaveManagement'
import Settings from './pages/Settings'
import { students } from './data/students'
import './App.css'

const defaultLogin = { username: 'admin', password: 'admin123' }

const AppContent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedSection, setSelectedSection] = useState('Dashboard')
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [selectedStudent, setSelectedStudent] = useState(students[0])
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)

  const user = { name: 'Admin User' }
  const notifications = [
    { id: 1, title: 'Fee reminder', message: 'Three fees are due this week.', time: '10m ago' },
    { id: 2, title: 'Attendance alert', message: 'Two students need attention.', time: '1h ago' },
    { id: 3, title: 'Exam notice', message: 'Grade 10 physics test is scheduled.', time: '3h ago' },
  ]

  const handleLogin = (form) => {
    if (form.username === defaultLogin.username && form.password === defaultLogin.password) {
      setIsLoggedIn(true)
      setSelectedSection('Dashboard')
      setLoginForm({ username: '', password: '' })
      return
    }

    alert('Invalid username or password')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setSelectedSection('Dashboard')
    setLoginForm({ username: '', password: '' })
    setNotificationsOpen(false)
    setProfileMenuOpen(false)
  }

  const handleViewStudent = (student) => {
    setSelectedStudent(student)
    setSelectedSection('Students')
    setNotificationsOpen(false)
    setProfileMenuOpen(false)
  }

  const handleSectionSelect = (section) => {
    setSelectedSection(section)
    setNotificationsOpen(false)
    setProfileMenuOpen(false)
  }

  const renderPage = () => {
    switch (selectedSection) {
      case 'Dashboard':
        return <Dashboard selectedStudent={selectedStudent} setSelectedSection={setSelectedSection} />
      case 'Students':
        return <Students selectedStudent={selectedStudent} onViewStudent={handleViewStudent} />
      case 'Classes':
        return <Classes />
      case 'Attendance':
        return <Attendance />
      case 'Tests & Exams':
        return <Tests />
      case 'Fees':
        return <Fees />
      case 'Results':
        return <Results />
      case 'Exam Schedule':
        return <ExamSchedulePage />
      case 'Leave Management':
        return <LeaveManagement />
      case 'Settings':
        return <Settings />
      default:
        return <Dashboard selectedStudent={selectedStudent} setSelectedSection={setSelectedSection} />
    }
  }

  const pageTitle = useMemo(() => selectedSection, [selectedSection])

  return (
    <div className="app-shell">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} loginForm={loginForm} setLoginForm={setLoginForm} />
      ) : (
        <>
          <Header
            schoolName="Bright Future Academy"
            user={user}
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
            onToggleSidebar={() => {
              setSidebarOpen((open) => !open)
              setProfileMenuOpen(false)
              setNotificationsOpen(false)
            }}
            sidebarOpen={sidebarOpen}
            notifications={notifications}
            notificationsOpen={notificationsOpen}
            onToggleNotifications={() => {
              setNotificationsOpen((open) => !open)
              setProfileMenuOpen(false)
            }}
            profileMenuOpen={profileMenuOpen}
            onToggleProfile={() => {
              setProfileMenuOpen((open) => !open)
              setNotificationsOpen(false)
            }}
          />

          <div className="main-layout">
            <Sidebar
              activeSection={selectedSection}
              onSelectSection={handleSectionSelect}
              isOpen={sidebarOpen}
            />

            <main className="content-area">
              <div className="section-title">{pageTitle}</div>
              {renderPage()}
            </main>
          </div>
        </>
      )}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
