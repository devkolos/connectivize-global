
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="container mx-auto flex items-center justify-between">
        <img 
          src="/lovable-uploads/00be0f19-2306-4e8c-b394-c4583e557a87.png" 
          alt="Kolos Network" 
          className="h-16 w-auto" 
        />
        <div className="flex items-center gap-6">
          <Button variant="ghost" className="text-white hover:bg-white/10">About</Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">Services</Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">Contact</Button>
          <Button 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20"
          >
            Join Network
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
