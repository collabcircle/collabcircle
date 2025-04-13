
import Header from "./componant/header";
import Footer from "./componant/footer";
import ACAnimatedShowcase from "./componant/typing";
import FullScreenCarousel from "./componant/crowsel";
import OurServices from "./componant/ourservices";
import DynamicSections from "./componant/information";
import ImageGallery from "./componant/Imagegalary";
import Testimonial from "./componant/testimonial";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ContactUs from "./componant/contactcomponant/contactUs";
export default function Home() {
  return (
     <>
           <Header/>
               <FullScreenCarousel/>
        <ACAnimatedShowcase/>
        <OurServices/>
        <ImageGallery/>
        <DynamicSections/>
       <Testimonial/>
        <ContactUs/>
        
             <Footer/>
     </>
  );
}
