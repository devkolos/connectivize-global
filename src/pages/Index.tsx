
import { motion } from "framer-motion";
import { Globe2, ArrowRight, Users2, PieChart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-kolos-green">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center text-white z-10"
        >
          <span className="inline-block px-4 py-1 bg-kolos-gold/10 backdrop-blur-sm rounded-full text-kolos-gold mb-6">
            Welcome to Kolos
          </span>
          <h1 className="font-display text-5xl md:text-7xl mb-6">
            The World's First Strategic
            <br />
            Enterprise Expansion Network
          </h1>
          <p className="text-xl mb-8 text-white/80">
            Connecting Leaders, Securing Trust
          </p>
          <Button
            variant="outline"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-kolos-green to-kolos-green/95">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl text-white mb-4">
              What You Get
            </h2>
            <p className="text-white/60">
              Exclusive membership benefits designed for enterprise growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 text-white group hover:bg-white/20 transition-all duration-300"
              >
                <feature.icon className="h-8 w-8 mb-4 text-kolos-gold" />
                <h3 className="text-xl font-display mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-kolos-green/90">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-kolos-gold mb-6">❝</div>
            <p className="font-display text-2xl md:text-3xl text-white mb-8 leading-relaxed">
              Over the past year, Kolos facilitated 100+ high-value connections,
              resulting in $25M–$500M USD in business opportunities across
              renewable energy, AI, and real estate.
            </p>
            <p className="text-kolos-gold font-display">— Ira Friedman</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: Globe2,
    title: "AI-Powered Deal Matching",
    description: "Smart algorithms connect you with optimal opportunities",
  },
  {
    icon: PieChart,
    title: "Deal Pipeline Tracking",
    description: "Monitor and manage your strategic opportunities",
  },
  {
    icon: Users2,
    title: "Exclusive Forums & Events",
    description: "Connect with industry leaders and decision makers",
  },
  {
    icon: Calendar,
    title: "Actionable Insights",
    description: "Data-driven recommendations for growth",
  },
];

export default Index;
