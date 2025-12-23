import { motion } from "framer-motion"
import { useEffect, useState } from "react"

function FeaturedJobs () {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data))
  })

  return (
    <>
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-10">Latest Job Posts            
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <motion.div
              key={index}
              whileHover={{scale: 1.01}}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-950 mb-2">
                  {job.title}
                </h3>
                <p className="text-amber-500 font-semibold mb-2">{job.budget}</p>
                <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>
                <button className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition">
                  View Job
                </button>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition">
              Browse All Jobs
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
export default FeaturedJobs