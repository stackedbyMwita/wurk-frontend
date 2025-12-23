import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTiktok } from "react-icons/fa";


export default function Footer () {
  return (
    <section className="bg-blue-950 py-10">
      <footer className="text-white mx-auto max-w-7xl px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-200">Our Mission</h3>
            <p className="text-gray-400">Our mission is to provide you with high quality electronics at affordable prices while promoting sustainability through device refurbishment</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-gray-200">Quick Links</h3>
            <ul className="text-gray-400">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Delivery</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact US</a></li>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">Return Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Warranty</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 text-gray-400">
            <h3 className="text-gray-200">Get in Touch</h3>
            <p className="flex gap-2 items-center"> <FaEnvelope/> info@wurk.com</p>
            <p className="flex gap-2 items-center"> <FaPhoneAlt/>+254 718 521 808</p>

            <div className="flex gap-4 mt-4 items-center text-2xl text-gray-200">
              <a href="#" className="hover:text-blue-400"><FaFacebook/></a>
              <a href="#" className="hover:text-blue-400"><FaInstagram/></a>
              <a href="#" className="hover:text-blue-400"><FaTiktok/></a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-gray-200">Sections</h3>
            <ul className="text-gray-400">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Browse skills</a></li>
              <li><a href="#" className="hover:text-blue-400">Post jobs US</a></li>
              <li className="flex gap-3"><a href="#" className="hover:text-blue-400">Login</a><a href="#" className="hover:text-blue-400">Signup</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-400 pt-6 border-t border-t-gray-500 mt-6">
          <p>&copy; {new Date().getFullYear()} <strong>Wurk</strong>. All Rights Reserved.</p>
        </div>
      </footer>
    </section>
  )
};
