const Stats = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { value: "95%", label: "Placement Rate" },
            { value: "48hrs", label: "Average Response Time" },
            { value: "10k+", label: "Companies Trust Us" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-forest-light p-8 rounded-xl border border-mint/10 transition-all duration-300 hover:scale-105 hover:border-mint/30 hover:shadow-lg hover:shadow-mint/5"
            >
              <p className="text-4xl font-bold text-mint mb-2">{stat.value}</p>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;