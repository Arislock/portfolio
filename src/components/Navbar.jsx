import navbarbg from "../assets/img/navbar.png";
import homeIcon from "../assets/icon/coffee.png";
import projectIcon from "../assets/icon/folder.png";
import aboutIcon from "../assets/icon/camera.png";
import contactIcon from "../assets/icon/mail.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50">
      <img
        src={navbarbg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-white/20" />

      <div className="relative max-w-5xl mx-auto h-full px-4 flex items-center justify-center">
        <div className="flex gap-24">
            <a href="#home" className="flex items-center gap-2 px-3 py-1.5
                transition-colors hover:bg-[#FEFFF1]">
                <img src={homeIcon} alt="" className="w-8 h-8" />
                home
            </a>
            <a href="#projects" className="flex items-center gap-2 px-3 py-1.5 transition-colors hover:bg-[#FEFFF1]">
                <img src={projectIcon} alt="" className="w-8 h-8" />
                projects
            </a>
            <a href="#about" className="flex items-center gap-2 px-3 py-1.5 transition-colors hover:bg-[#FEFFF1]">
                <img src={aboutIcon} alt="" className="w-8 h-8" />
                about
            </a>
            <a href="#contact" className="flex items-center gap-2 px-3 py-1.5 transition-colors hover:bg-[#FEFFF1]">
                <img src={contactIcon} alt="" className="w-8 h-8" />
                contact
            </a>
        </div>
      </div>
    </nav>
  );
};
