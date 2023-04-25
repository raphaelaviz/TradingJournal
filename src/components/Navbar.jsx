import { BsLayoutSidebarInset } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

// This component renders the Navbar

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  
  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <TooltipComponent title='Menu'>
        <button
          type="button"
          onClick={handleActiveMenu}
          className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
        <span
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
          {<BsLayoutSidebarInset />}
        </button>
      </TooltipComponent>
      <Link to="/" className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
        <span>My Trading Journal</span>
      </Link>
    </div>
  );
};

export default Navbar;