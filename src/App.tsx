import './App.css'
import { CommandBar } from './components/CommandBar'
import { useCommandBar } from './hooks'
import GlobalHeader from 'carbon-react/lib/components/global-header'
import { Menu, MenuItem } from 'carbon-react/lib/components/menu'
import Box from 'carbon-react/lib/components/box'
import Card from 'carbon-react/lib/components/card'
import { CardRow, CardColumn } from 'carbon-react/lib/components/card'
import Typography from 'carbon-react/lib/components/typography'

function App() {
  const { open } = useCommandBar()

  const handleSearchClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Trigger keyboard shortcut to open command bar
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: true,
      bubbles: true,
      cancelable: true
    })
    window.dispatchEvent(event)
  }

  return (
    <>
      <CommandBar />
      <GlobalHeader aria-label="Sage global header">
        <Menu menuType="black" flex="1">
          <MenuItem href="#" flex="0 0 auto" ariaLabel="waffle menu">
            <span style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <img src="/images/waffle.svg" alt="waffle menu" style={{ width: '24px', height: '24px' }} />
            </span>
          </MenuItem>
          <MenuItem href="#" flex="0 0 auto" ariaLabel="sage logo">
            <span style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <img src="/images/sage.svg" alt="sage logo" style={{ height: '24px' }} />
            </span>
          </MenuItem>
          <MenuItem href="#" flex="0 0 auto" ariaLabel="divider">
            <span style={{ display: 'flex', alignItems: 'center', height: '100%', padding: '0 12px', pointerEvents: 'none' }}>
              <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
            </span>
          </MenuItem>
          <MenuItem flex="1" submenu="Leda Construction LTD">
            <MenuItem href="#">Company 2</MenuItem>
            <MenuItem href="#">Company 3</MenuItem>
          </MenuItem>
          <MenuItem href="#" onClick={handleSearchClick} flex="0 0 auto" ariaLabel="search">
            <span style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleSearchClick}>
              <img src="/images/search.svg" alt="search" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
              Search
            </span>
          </MenuItem>
          <MenuItem href="#" flex="0 0 auto" ariaLabel="add">
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/images/quickadd.svg" alt="add" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
              Quick actions
            </span>
          </MenuItem>
          <MenuItem href="#" flex="0 0 auto" ariaLabel="home">
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/images/home.svg" alt="home" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
              Home
            </span>
          </MenuItem>
          <MenuItem href="#" flex="0 0 auto" ariaLabel="alert">
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/images/bell.svg" alt="alert" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
              Notifications
            </span>
          </MenuItem>
          <MenuItem href="#" flex="0 0 auto" ariaLabel="tasks">
            Tasks
          </MenuItem>
          <MenuItem flex="0 0 auto" submenu="Simon">
            <MenuItem href="#">Profile</MenuItem>
            <MenuItem href="#">Settings</MenuItem>
            <MenuItem href="#">Sign out</MenuItem>
          </MenuItem>
          <MenuItem flex="0 0 auto" submenu="Help">
            <MenuItem href="#">Documentation</MenuItem>
            <MenuItem href="#">Support</MenuItem>
            <MenuItem href="#">About</MenuItem>
          </MenuItem>
          <MenuItem href="#" flex="0 0 auto" ariaLabel="ai">
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/images/ai-icon-1.svg" alt="ai" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
              Copilot
            </span>
          </MenuItem>
        </Menu>
      </GlobalHeader>

      {/* Main Content Area */}
      <Box
        flex="1"
        overflow="auto"
        p={4}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <Typography variant="h2">Leda Construction</Typography>

        <Box mt={2}>
          <Card spacing="medium">
            <CardRow>
              <CardColumn>
                <Typography variant="h4" mb={2}>
                  Quick Actions
                </Typography>
                <Typography variant="p">
                  Press <Typography variant="strong">⌘K</Typography> to open the command bar and quickly navigate through the application.
                </Typography>
                <Box mt={3}>
                  <button
                    onClick={open}
                    style={{
                      padding: '12px 24px',
                      fontSize: '14px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      borderRadius: '8px',
                      border: '1px solid var(--colorsUtilityYin055)',
                      backgroundColor: 'var(--colorsUtilityYang100)',
                      color: 'var(--colorsUtilityYin090)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--colorsUtilityYin015)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--colorsUtilityYang100)'
                    }}
                  >
                    Open Command Bar ⌘K
                  </button>
                </Box>
              </CardColumn>
            </CardRow>
          </Card>
        </Box>
      </Box>
    </>
  )
}

export default App
