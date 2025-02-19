import { motion } from "framer-motion";
import { 
  Globe2, ArrowRight, Users2, PieChart, Calendar, 
  Building2, Briefcase, Car, ShoppingBag, Heart, Zap,
  CircleDollarSign, CheckCircle, MessageSquare, Target,
  BrainCircuit, Handshake, BarChartHorizontal
} from "lucide-react";
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

      {/* About Section */}
      <section className="py-20 px-4 bg-kolos-green/95">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-4xl text-white mb-6">About Kolos</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Kolos redefines enterprise growth by uniting business leaders, corporate decision-makers, and top academic minds worldwide. Our AI-powered solution accelerates connections, delivers measurable results, and fuels industry-agnostic expansion on a global scale—all while remaining cost-effective.
            </p>
          </motion.div>
        </div>
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

      {/* Global Network Section */}
      <section className="py-20 px-4 bg-kolos-green/90">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl text-white mb-6">Global Network</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Our reach is global—thanks to our partners and advisors in key markets around the world, we create additional value by operating across diverse geographies. This international presence broadens your strategic opportunities and enhances our platform's effectiveness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-20 px-4 bg-kolos-green/85">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl text-white mb-4">Industry Expertise</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Kolos is industry-agnostic, ensuring high-value matches across sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 text-white text-center group hover:bg-white/20 transition-all duration-300"
              >
                <industry.icon className="h-8 w-8 mb-4 mx-auto text-kolos-gold" />
                <h3 className="text-sm font-display">{industry.title}</h3>
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

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-kolos-green/85">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl text-white mb-4">Pricing</h2>
            <p className="text-white/80">Choose your pathway to strategic expansion</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 text-white text-center relative isolate overflow-hidden"
              >
                <h3 className="text-2xl font-display mb-4">{option.title}</h3>
                <p className="text-3xl font-display text-kolos-gold mb-6">{option.price}</p>
                <p className="text-white/60 mb-6">{option.description}</p>
                <Button 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20 mt-auto"
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-kolos-green/90">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl text-white mb-4">How It Works</h2>
            <p className="text-white/80">Your journey to strategic growth</p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <step.icon className="h-10 w-10 mb-4 mx-auto text-kolos-gold" />
                <h3 className="text-lg font-display mb-2">{step.title}</h3>
                <p className="text-sm text-white/60">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Initiatives Section */}
      <section className="py-20 px-4 bg-kolos-green/85">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-4xl text-white mb-6">Volunteer Initiatives</h2>
            <p className="text-lg text-white/80 mb-8">
              In addition to our core services, Kolos supports volunteer-led initiatives that help business leaders connect and collaborate. Participation in these sessions is optional and serves as a community-driven forum for exchanging ideas.
            </p>
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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

const industries = [
  { icon: BrainCircuit, title: "Technology & AI" },
  { icon: CircleDollarSign, title: "Finance & Private Equity" },
  { icon: Building2, title: "Real Estate & Infrastructure" },
  { icon: Car, title: "Luxury & Travel" },
  { icon: ShoppingBag, title: "Consumer Goods & Retail" },
  { icon: Heart, title: "Healthcare & Biotech" },
  { icon: Zap, title: "Energy & Renewable Energy" },
  { icon: Briefcase, title: "Manufacturing & Supply Chain" },
];

const pricingOptions = [
  {
    title: "Annual Plan",
    price: "$50K",
    description: "Upfront payment with a 12-month money-back guarantee",
  },
  {
    title: "Monthly Plan",
    price: "$5K",
    description: "Per month for ongoing enterprise support",
  },
];

const process = [
  {
    icon: MessageSquare,
    title: "Onboarding Interview",
    description: "Understand your goals",
  },
  {
    icon: Target,
    title: "AI Matchmaking",
    description: "Identify top opportunities",
  },
  {
    icon: Handshake,
    title: "Relationship Building",
    description: "Develop key connections",
  },
  {
    icon: BrainCircuit,
    title: "Actionable Insights",
    description: "Receive tailored support",
  },
  {
    icon: BarChartHorizontal,
    title: "Deal Tracking",
    description: "Monitor progress and outcomes",
  },
];

export default Index;
