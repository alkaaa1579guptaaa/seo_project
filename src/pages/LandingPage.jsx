import AboutUs from "@/components/About-us/AboutUs"
import Achievements from "@/components/Achievements/Achievements"
import Banner from "@/components/Banner/Banner"
import Blogs from "@/components/Blogs/Blogs"
import Contact from "@/components/Contact-Us/ContactUs"
import FAQ from "@/components/FAQ/FAQ"
import Services from "@/components/Services/Services"
import Testimonials from "@/components/Testimonials/Testimonials"
import WhyUs from "@/components/WhyUs/WhyUs"

const LandingPage=()=>{
    return(
<>
<Banner/>
<AboutUs/>
<Services/>
<Achievements/>
<WhyUs/>
<Testimonials/>
<Blogs/>
<FAQ/>
<Contact/>
</>
    )
}
export default LandingPage