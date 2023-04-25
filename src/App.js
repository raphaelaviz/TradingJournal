import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { VscColorMode } from 'react-icons/vsc';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Calendar, Trades, Stacked, Kanban, Bar, Pie} from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';


// Renders the main screen and sets the routes for the different pages across the project

const App = () => {
  const { currentMode, activeMenu, themeSettings, setThemeSettings } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4">
            <TooltipComponent           
              content="Theme"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: 'gray', borderRadius: '50%' }}
                className="text-2xl text-white p-2 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <VscColorMode/>
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                <Route path="/" element={<Trades />} />
                <Route path="/trades" element={<Trades />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
              
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;