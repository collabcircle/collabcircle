import Header from "../componant/header";
import Footer from "../componant/footer";
import ContactUs from "../componant/contactcomponant/contactUs";
import ContactMap from "../componant/contactcomponant/contactMap";
import ContactBanner from "../componant/contactcomponant/contactBanner";
export default function Contact() {
  return (
    <>
     <Header />
     <ContactBanner/>
     <ContactUs/>
      <ContactMap/>
      <Footer />
    </>
  );
}