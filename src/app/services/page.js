 
import Header from "../componant/header"
import Footer from "../componant/footer"


export default function Services(){
    return (<>
    <Header />
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 relative overflow-hidden">
            <div className="container mx-auto text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Services</h2>
                <p className="max-w-2xl mx-auto mb-8 text-slate-700">
                    We offer a wide range of services to meet your cooling needs. From installation to maintenance, our team is here to help.
                </p>
            </div>
        </section>
        <Footer/>
    </>)
}