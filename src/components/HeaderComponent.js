import { LOGO_URL } from "../utiils/constant";

const HeaderComponent = () => {
  return (
    <div className="header">  
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Food</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
