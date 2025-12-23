import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

function Testimonials () {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
  })


  return(
    <section className='bg-gradient-to-r from-blue-50 to-blue-600 py-16'>
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            whileHover={{scale: 1.01}}
            className="bg-white p-6 rounded-xl shadow-md transform rotate-1 cursor-pointer transition-transform duration-300 hover:shadow-lg hover:rotate-0 hover:bg-blue-100 hover:scale-1.2xl"
            >
            <h3 className="flex items-center gap-2 text-xl text-gray-600 mb-2"> <FaUserCircle className='text-gray-600'/> {testimonial.author}</h3>
            <div className="text-gray-400 mb-4">{testimonial.text}</div>
             <div className='flex mt-2 gap-1.5 text-amber-500'><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar className='text-gray-500'/></div>
          </motion.div>
            ))}
      </div>
    </section>
  )
}

export default Testimonials;