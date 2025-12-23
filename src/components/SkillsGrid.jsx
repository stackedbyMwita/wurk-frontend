import { faBalanceScale, faBullhorn, faCalculator, faChartBar, faHeadset, faLaptopCode, faPaintBrush, faPenNib, faSearchDollar, faTasks, faUserTie, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function SkillsGrid () {
  const categories = [
    {name: "Graphic Design", icon: <FontAwesomeIcon icon={faPaintBrush}/>},
    {name: "Web Development", icon: <FontAwesomeIcon icon={faLaptopCode}/>},
    {name: "Content Writing", icon: <FontAwesomeIcon icon={faPenNib}/>},
    {name: "Marketing", icon: <FontAwesomeIcon icon={faBullhorn}/>},
    {name: "Video Editing", icon: <FontAwesomeIcon icon={faVideo}/>},
    {name: "Virtual Assistant", icon: <FontAwesomeIcon icon={faUserTie}/>},
    {name: "Customer Support", icon: <FontAwesomeIcon icon={faHeadset}/>},
    {name: "Accounting", icon: <FontAwesomeIcon icon={faCalculator}/>},
    {name: "Data Analysis", icon: <FontAwesomeIcon icon={faChartBar}/>},
    {name: "Legal Services", icon: <FontAwesomeIcon icon={faBalanceScale}/>},
    {name: "SEO Specialist", icon: <FontAwesomeIcon icon={faSearchDollar}/>},
    {name: "Project Manager", icon: <FontAwesomeIcon icon={faTasks}/>}
  ];

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-10">
            Explore Top Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {categories.map((cat, index) => (
              <motion.div
              key={index}
              whileHover={{scale: 1.02}}
              className="bg-white p-6 rounded-xl shadow-md cursor-pointer hover:bg-gray-100 transition"
              >
                <div className="text-amber-500 text-5xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-semibold text-blue-950">{cat.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default SkillsGrid