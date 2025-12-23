import { FaBars } from "react-icons/fa"
import Button from "./Button"

function Navbar() {
  return (
    <>
      <nav className="bg-white border-b border-blue-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-16">
            {/*Logo*/}
            <div className="flex-shrink-0">
              <img src="/logo_1.webp" alt="Wurk" className="h-8 w-auto object-contain" />
            </div>

            <div className="hidden items-center md:flex space-x-8">
              {/*Navigation Links*/}
              <div className="hidden md:flex space-x-8">
                <ul>
                  <li>Home</li>
                </ul>
              </div>

              {/*Auth Buttons*/}
              <div className="hidden md:flex space-x-4">
                <Button label="Login" />
                <Button label="Signup" />
              </div>
            </div>

            {/*Mobile menu placeholder*/}
            <div className="md:hidden">
              <button className="text-gray-700">
                <FaBars className="w-6 h-6 " />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar