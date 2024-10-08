import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav1icons() {
  

  return (
    
      <div className="flex gap-5 text-2xl">
        
        <Link to="https://www.linkedin.com/company/thinktiveit/"> <FaLinkedin /></Link>
        <Link to="https://www.facebook.com/profile.php?id=61559515927626"><FaFacebook /></Link>
        <Link to="https://www.instagram.com/thinktiveit"> <FaInstagram /></Link>
        
      </div>
        
    
  );
}

export default Nav1icons;
