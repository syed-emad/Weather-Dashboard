import { IMAGES } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-white h-16 flex items-center mt-5">
      <div className="cursor-pointer w-full space-x-6 py-2 mx-auto items-center  xs:px-10 xs:flex xs:justify-center  md:flex md:items-center md:justify-start px-8">
        <span className="text-sm items-center flex text-gray-500">
          <img src={IMAGES.apollo_logo} className="w-10 h-10" alt="logo" />
          <p className="xs: text-xs"> Made for Apollo-Group.</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
