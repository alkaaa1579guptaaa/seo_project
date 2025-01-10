import blog1 from "../../assets/blog-1.png"
import blog2 from "../../assets/blog-2.png"
const Blogs=()=>{
    return(
        <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column (Heading and Text) */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
             Stay Updated with our latest articles 
            </h1>
            <p className="text-lg text-gray-700">
            Explore our most recent articles and blog posts to stay informed about the <br/>
            latest trends,strategies,and insights in digital marketing. Our expert team<br/> shares 
            valuable knowledge to help you. 
            </p>
          </div>
  
          {/* Right Column (Two Images Side by Side) */}
          <div className="flex gap-4">
            <div className="flex-1">
              <img
                src={blog1}
                alt="Image 1"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex-1">
              <img
                src={blog2}
                alt="Image 2"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    )
}
export default Blogs;