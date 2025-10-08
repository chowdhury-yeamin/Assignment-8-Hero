const StatsSection = () => {
  const stats = [
    {
      title: "Total Downloads",
      value: "29.6M",
      subtext: "21% More Than Last Month",
    },
    {
      title: "Total Reviews",
      value: "906K",
      subtext: "40% More Than Last Month",
    },
    {
      title: "Active Apps",
      value: "132+",
      subtext: "31 More Will Launch",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 py-8 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Trusted By Millions, Built For You
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className=" p-8 w-64 "
          >
            
            <p className="text-lg font-medium">{stat.title}</p>
            <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
            <p className="text-sm text-gray-200 mt-2">{stat.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
