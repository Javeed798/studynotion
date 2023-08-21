const StatsComponent = () => {

  const Stats = [
    {
      count : "5k",
      label : "Active Students"
    },
    {
      count : "10+",
      label : "Mentors"
    },
    {
      count : "200+",
      label : "Courses"
    },
    {
      count : "50",
      label : "Awards"
    },
  ]
  return (
    <section>
      <div>
          <div className="flex gap-x-4">
            {
              Stats.map((data,index) => (
                <div key={index}>
                  <h1>{data.count}</h1>
                  <h2>{data.label}</h2>
                </div>
              ))
            }            
          </div>
      </div>
    </section>
  )
}
export default StatsComponent