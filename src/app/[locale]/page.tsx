import ContactForm from "@/components/СontactForm";
import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/Footer";


    


function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <ContactForm/>
      <About />
      <Services />
      <Team />
      <ScrollToTop />
      <Footer/>
    </ThemeProvider>
  );
}

export default Home;
