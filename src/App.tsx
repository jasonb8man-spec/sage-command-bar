import './App.css'
import { useState } from 'react'
import { CommandBar } from './components/CommandBar'
import { useCommandBar } from './hooks'
import { DesignConfig } from './components/DesignConfig'
import type { DesignOption } from './components/DesignConfig'
import GlobalHeader from 'carbon-react/lib/components/global-header'
import { Menu, MenuItem } from 'carbon-react/lib/components/menu'
import Box from 'carbon-react/lib/components/box'
import Typography from 'carbon-react/lib/components/typography'
import Button from 'carbon-react/lib/components/button'
import {
  FlatTable,
  FlatTableHead,
  FlatTableBody,
  FlatTableRow,
  FlatTableHeader,
  FlatTableCell,
} from 'carbon-react/lib/components/flat-table'

function App() {
  const { open } = useCommandBar()
  const [designOption, setDesignOption] = useState<DesignOption>('A')

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
      <CommandBar designOption={designOption} />
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
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h2">Good morning, Simon!</Typography>
          <DesignConfig currentDesign={designOption} onDesignChange={setDesignOption} />
        </Box>
        
        <div style={{ marginTop: '32px', display: 'flex', gap: '8px' }}>
          <Button size="small">Shortcut</Button>
          <Button size="small">Shortcut</Button>
          <Button size="small">Shortcut</Button>
          <Button size="small">Shortcut</Button>
          <Button size="small">Shortcut</Button>
          <Button size="small">Shortcut</Button>
        </div>

        <h2 style={{ fontSize: '16px', marginTop: '24px', marginBottom: '0', fontWeight: '600' }}>Needs your attention</h2>
        
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={3} mt={2}>
          <div style={{ 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
          }}>
            <Typography variant="h3" mb={2}>Tile 1</Typography>
            <Typography variant="p">Content for tile 1</Typography>
          </div>
          <div style={{ 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
          }}>
            <Typography variant="h3" mb={2}>Tile 2</Typography>
            <Typography variant="p">Content for tile 2</Typography>
          </div>
          <div style={{ 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
          }}>
            <Typography variant="h3" mb={2}>Tile 3</Typography>
            <Typography variant="p">Content for tile 3</Typography>
          </div>
          <div style={{ 
            padding: '24px', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
          }}>
            <Typography variant="h3" mb={2}>Tile 4</Typography>
            <Typography variant="p">Content for tile 4</Typography>
          </div>
        </Box>

        <Box mt={4}>
          <Typography variant="h3" mb={2}>Recent Transactions</Typography>
          <FlatTable>
            <FlatTableHead>
              <FlatTableRow>
                <FlatTableHeader>ID</FlatTableHeader>
                <FlatTableHeader>Customer</FlatTableHeader>
                <FlatTableHeader>Amount</FlatTableHeader>
                <FlatTableHeader>Date</FlatTableHeader>
                <FlatTableHeader>Status</FlatTableHeader>
              </FlatTableRow>
            </FlatTableHead>
            <FlatTableBody>
              <FlatTableRow>
                <FlatTableCell>INV-001</FlatTableCell>
                <FlatTableCell>Acme Corp</FlatTableCell>
                <FlatTableCell>$1,250.00</FlatTableCell>
                <FlatTableCell>2024-01-15</FlatTableCell>
                <FlatTableCell>Paid</FlatTableCell>
              </FlatTableRow>
              <FlatTableRow>
                <FlatTableCell>INV-002</FlatTableCell>
                <FlatTableCell>Tech Solutions Ltd</FlatTableCell>
                <FlatTableCell>$3,450.00</FlatTableCell>
                <FlatTableCell>2024-01-14</FlatTableCell>
                <FlatTableCell>Pending</FlatTableCell>
              </FlatTableRow>
              <FlatTableRow>
                <FlatTableCell>INV-003</FlatTableCell>
                <FlatTableCell>Global Industries</FlatTableCell>
                <FlatTableCell>$890.50</FlatTableCell>
                <FlatTableCell>2024-01-13</FlatTableCell>
                <FlatTableCell>Paid</FlatTableCell>
              </FlatTableRow>
              <FlatTableRow>
                <FlatTableCell>INV-004</FlatTableCell>
                <FlatTableCell>Smith & Associates</FlatTableCell>
                <FlatTableCell>$2,100.00</FlatTableCell>
                <FlatTableCell>2024-01-12</FlatTableCell>
                <FlatTableCell>Overdue</FlatTableCell>
              </FlatTableRow>
              <FlatTableRow>
                <FlatTableCell>INV-005</FlatTableCell>
                <FlatTableCell>Johnson Enterprises</FlatTableCell>
                <FlatTableCell>$5,670.25</FlatTableCell>
                <FlatTableCell>2024-01-11</FlatTableCell>
                <FlatTableCell>Paid</FlatTableCell>
              </FlatTableRow>
              <FlatTableRow>
                <FlatTableCell>INV-006</FlatTableCell>
                <FlatTableCell>Metro Services</FlatTableCell>
                <FlatTableCell>$1,890.00</FlatTableCell>
                <FlatTableCell>2024-01-10</FlatTableCell>
                <FlatTableCell>Pending</FlatTableCell>
              </FlatTableRow>
              <FlatTableRow>
                <FlatTableCell>INV-007</FlatTableCell>
                <FlatTableCell>Digital Dynamics</FlatTableCell>
                <FlatTableCell>$4,320.75</FlatTableCell>
                <FlatTableCell>2024-01-09</FlatTableCell>
                <FlatTableCell>Paid</FlatTableCell>
              </FlatTableRow>
              <FlatTableRow>
                <FlatTableCell>INV-008</FlatTableCell>
                <FlatTableCell>Coastal Trading Co</FlatTableCell>
                <FlatTableCell>$2,560.00</FlatTableCell>
                <FlatTableCell>2024-01-08</FlatTableCell>
                <FlatTableCell>Paid</FlatTableCell>
              </FlatTableRow>
              <FlatTableRow>
                <FlatTableCell>INV-009</FlatTableCell>
                <FlatTableCell>Prime Logistics</FlatTableCell>
                <FlatTableCell>$3,210.50</FlatTableCell>
                <FlatTableCell>2024-01-07</FlatTableCell>
                <FlatTableCell>Pending</FlatTableCell>
              </FlatTableRow>
              <FlatTableRow>
                <FlatTableCell>INV-010</FlatTableCell>
                <FlatTableCell>Apex Manufacturing</FlatTableCell>
                <FlatTableCell>$6,780.00</FlatTableCell>
                <FlatTableCell>2024-01-06</FlatTableCell>
                <FlatTableCell>Paid</FlatTableCell>
              </FlatTableRow>
            </FlatTableBody>
          </FlatTable>
        </Box>
      </Box>
    </>
  )
}

export default App
