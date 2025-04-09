import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (<>
  
 <Navbar/>
   <div className="">

    <Hero/>
   </div>
   <Footer/>
   </>
   
  );
}
