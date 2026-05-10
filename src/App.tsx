import './App.css'
import { CommandBar } from './components/CommandBar'
import { useCommandBar } from './hooks'
import GlobalHeader from 'carbon-react/lib/components/global-header'
import { Menu, MenuItem } from 'carbon-react/lib/components/menu'
import Box from 'carbon-react/lib/components/box'
import Card from 'carbon-react/lib/components/card'
import { CardRow, CardColumn } from 'carbon-react/lib/components/card'
import Portrait from 'carbon-react/lib/components/portrait'
import Typography from 'carbon-react/lib/components/typography'

function App() {
  const { open } = useCommandBar()

  return (
    <>
      <CommandBar />
      <GlobalHeader aria-label="Sage Finance global header">
        <Menu menuType="black" flex="1">
          <MenuItem flex="1" submenu="Products">
            <MenuItem href="#">Dashboard</MenuItem>
            <MenuItem href="#">Transactions</MenuItem>
            <MenuItem href="#">Reports</MenuItem>
          </MenuItem>
          <MenuItem flex="0 0 auto" submenu="Settings">
            <MenuItem href="#">Preferences</MenuItem>
            <MenuItem href="#">Account</MenuItem>
          </MenuItem>
        </Menu>
        <Box display="flex" alignItems="center" flex="0 0 auto" pl={2}>
          <Portrait initials="JD" size="M" />
        </Box>
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
        <Typography variant="h2">Dashboard</Typography>

        <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={3}>
          <Card spacing="medium">
            <CardRow>
              <CardColumn>
                <Typography variant="h4" mb={2}>
                  Revenue
                </Typography>
                <Typography variant="h2">$45,231</Typography>
                <Typography variant="p" mt={1}>
                  +20.1% from last month
                </Typography>
              </CardColumn>
            </CardRow>
          </Card>

          <Card spacing="medium">
            <CardRow>
              <CardColumn>
                <Typography variant="h4" mb={2}>
                  Transactions
                </Typography>
                <Typography variant="h2">2,350</Typography>
                <Typography variant="p" mt={1}>
                  +180 from last month
                </Typography>
              </CardColumn>
            </CardRow>
          </Card>

          <Card spacing="medium">
            <CardRow>
              <CardColumn>
                <Typography variant="h4" mb={2}>
                  Active Users
                </Typography>
                <Typography variant="h2">573</Typography>
                <Typography variant="p" mt={1}>
                  +201 since last week
                </Typography>
              </CardColumn>
            </CardRow>
          </Card>
        </Box>

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
