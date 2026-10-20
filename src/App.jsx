import { useState } from 'react'
import './App.css'

const initialChatbots = [
  {
    id: 1,
    name: 'Customer Support Bot',
    platform: 'Web',
    intents: 'FAQs, Customer Support',
    status: 'Active',
    created: '20 Oct 2026',
  },
  {
    id: 2,
    name: 'Order Assistant',
    platform: 'WhatsApp',
    intents: 'Orders, Tracking',
    status: 'Active',
    created: '19 Oct 2026',
  },
  {
    id: 3,
    name: 'Team Helper',
    platform: 'Slack',
    intents: 'Scheduling, FAQs',
    status: 'Draft',
    created: '18 Oct 2026',
  },
  {
    id: 4,
    name: 'Shopping Assistant',
    platform: 'Web',
    intents: 'Products, Recommendations',
    status: 'Active',
    created: '17 Oct 2026',
  },
]

function App() {
  const [chatbots] = useState(initialChatbots)
  const [selectedPlatform, setSelectedPlatform] = useState('All Platforms')

  const filteredChatbots =
    selectedPlatform === 'All Platforms'
      ? chatbots
      : chatbots.filter(
          (chatbot) => chatbot.platform === selectedPlatform
        )

  const activeCount = chatbots.filter(
    (chatbot) => chatbot.status === 'Active'
  ).length

  const draftCount = chatbots.filter(
    (chatbot) => chatbot.status === 'Draft'
  ).length

  const platformCount = new Set(
    chatbots.map((chatbot) => chatbot.platform)
  ).size

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">AI</div>
          <div>
            <h2>ChatPilot</h2>
            <span>Integration Platform</span>
          </div>
        </div>

        <p className="menu-heading">WORKSPACE</p>

        <nav className="navigation" aria-label="Main navigation">
          <a href="#dashboard" className="nav-link active">
            <span>▦</span> Dashboard
          </a>

          <a href="#chatbots" className="nav-link">
            <span>▤</span> All Chatbots
          </a>

          <a href="#add-chatbot" className="nav-link">
            <span>＋</span> Add Chatbot
          </a>

          <a href="#settings" className="nav-link">
            <span>⚙</span> Settings
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <div className="help-icon">?</div>
            <h3>Need some help?</h3>
            <p>Manage your chatbot integrations with ease.</p>
            <button className="help-button" type="button">
              Help Center
            </button>
          </div>

          <div className="profile">
            <div className="avatar">K</div>
            <div>
              <strong>Workspace Admin</strong>
              <span>Administrator</span>
            </div>
            <span className="profile-menu">•••</span>
          </div>
        </div>
      </aside>

      <main className="main-content" id="dashboard">
        <header className="topbar">
          <div className="breadcrumb">
            Workspace <span>/</span> Dashboard
          </div>

          <div className="topbar-right">
            <span className="environment-badge">
              <span className="status-dot"></span>
              Demo Environment
            </span>
            <div className="top-avatar" aria-label="Workspace administrator">
              K
            </div>
          </div>
        </header>

        <section className="page-content">
          <div className="welcome-row">
            <div>
              <p className="eyebrow">YOUR WORKSPACE</p>
              <h1>Chatbot Dashboard</h1>
              <p className="page-description">
                Manage your chatbot integrations from one place.
              </p>
            </div>

            <button
              className="primary-button"
              type="button"
              onClick={() =>
                alert('We will build the Add Chatbot form next!')
              }
            >
              <span>＋</span> Add New Chatbot
            </button>
          </div>

          <section className="stats-grid" aria-label="Chatbot statistics">
            <article className="stat-card">
              <div className="stat-top">
                <span>Total Chatbots</span>
                <span className="stat-icon purple">▤</span>
              </div>
              <div className="stat-number">{chatbots.length}</div>
              <p className="stat-caption">Configurations in workspace</p>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span>Active Chatbots</span>
                <span className="stat-icon green">✓</span>
              </div>
              <div className="stat-number">{activeCount}</div>
              <p className="stat-caption">Marked as active in demo data</p>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span>Platforms</span>
                <span className="stat-icon blue">◎</span>
              </div>
              <div className="stat-number">{platformCount}</div>
              <p className="stat-caption">Platforms represented</p>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span>Draft Chatbots</span>
                <span className="stat-icon orange">✎</span>
              </div>
              <div className="stat-number">{draftCount}</div>
              <p className="stat-caption">Configurations in draft</p>
            </article>
          </section>

          <section className="chatbots-section" id="chatbots">
            <div className="section-heading">
              <div>
                <h2>All Chatbots</h2>
                <p>View and manage your chatbot configurations.</p>
              </div>

              <label className="filter-control">
                <span>Platform:</span>
                <select
                  value={selectedPlatform}
                  onChange={(event) =>
                    setSelectedPlatform(event.target.value)
                  }
                  aria-label="Filter chatbots by platform"
                >
                  <option>All Platforms</option>
                  <option>Web</option>
                  <option>WhatsApp</option>
                  <option>Slack</option>
                </select>
              </label>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>CHATBOT NAME</th>
                    <th>PLATFORM</th>
                    <th>ASSOCIATED INTENTS</th>
                    <th>CREATED</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredChatbots.map((chatbot) => (
                    <tr key={chatbot.id}>
                      <td>
                        <div className="chatbot-name-cell">
                          <div className="bot-avatar">
                            {chatbot.name.charAt(0)}
                          </div>
                          <strong>{chatbot.name}</strong>
                        </div>
                      </td>

                      <td>
                        <span className={`platform-badge ${chatbot.platform.toLowerCase()}`}>
                          {chatbot.platform}
                        </span>
                      </td>

                      <td className="intent-cell">{chatbot.intents}</td>
                      <td className="date-cell">{chatbot.created}</td>

                      <td>
                        <span className={`status-badge ${chatbot.status.toLowerCase()}`}>
                          <span className="status-dot"></span>
                          {chatbot.status}
                        </span>
                      </td>

                      <td>
                        <button
                          className="more-button"
                          type="button"
                          aria-label={`More actions for ${chatbot.name}`}
                          onClick={() =>
                            alert(
                              `${chatbot.name}: additional actions will be added next.`
                            )
                          }
                        >
                          •••
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredChatbots.length === 0 && (
                <div className="empty-state">
                  <h3>No chatbots found</h3>
                  <p>
                    Try selecting another platform to see your chatbots.
                  </p>
                </div>
              )}
            </div>

            <div className="table-footer">
              <span>
                Showing {filteredChatbots.length} of {chatbots.length} chatbots
              </span>
              <span>Demo data</span>
            </div>
          </section>

          <footer className="page-footer">
            AI ChatBot Integration Platform
            <span>Frontend Development Project</span>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App