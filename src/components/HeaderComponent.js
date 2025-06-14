import { useSelector } from "react-redux";
import { LOGO_URL } from "../utiils/constant";
import { Link } from 'react-router-dom';


const HeaderComponent = () => {

  const cart = useSelector((store) => store.cart.items )

  return (
    <header className="flex justify-between items-center w-[100%] bg-black text-white p-5">
      <div className="w-[50%]">
        <span className="brand-icon">🚀</span>
        <span className="brand-name">NextGen</span>
      </div>
      <div className="w-[50%]">
        <nav>
          <ul className="flex justify-between">
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/about"}><li>About</li></Link>
            <Link to={"/contact"}><li>Contact</li></Link>
            <Link to={"/cart"}><li className="font-bold">Cart ({cart.length})</li></Link>
            <li><a href="/services">Services</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
