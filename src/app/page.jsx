"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Crousel from "./Crousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tilt from "react-parallax-tilt";
import {
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";
import "./Sixty.css";
import { relative } from "path";
import BackgroundImageComponent from "./BackgroundImageComponent";
import Footer from "./Footer";
// import { img } from ".";

// import SimpleParallax from "simple-parallax-js/";

// import SimpleSlider from "./SimpleSlider";

export default function Home() {
  return (
    <>
      {/* upper content  */}

     <div
  style={{
    backgroundImage: `url('vector.png')`,
    backgroundSize: 'fit', // Ensures the background image covers the whole div
    backgroundPosition:"right", 
    backgroundRepeat:"no-repeat",// Centers the background image
  }}
  className="sec1 grid grid-cols-1 sm:grid-cols-2 mt-24"
>
  
        <section className="mt-52 mx-auto float-end  text-white">
          <h1 className="sm:mx-auto text-4xl mt-5 font-bold">
            Unlock Your Vision with Socium!
          </h1>
          <p className="mt-4 ">
            Your one-stop destination for custom Web and Mobile Development
            services
          </p>
          <button
            type="button"
            className=" btn bg-orange-400 px-8 text-white p-3 rounded-full mt-6"
          >
            Schedule 1:1 Meeting with us
          </button>
        </section>
        <section>
          <img
            src="./Low-code-development-amico-2.webp "
            alt=""
            className=" mt-5 img-fluid "
          />
        </section>
      </div>
      <div className="lg:mx-36 mx-10">
        <div className="grid grid-cols-1 sm:grid-cols-2  sm:mx-10">
          <section className="sm:mt-52   h-24  text-white">
            <h1 className=" text-3xl mt-5 font-bold text-orange-400">
              Who We Are
            </h1>
            <p className="mt-4 text-black ">
              Socium is a leading web and mobile development company, we don’t
              just create apps and websites – we build transformative solutions
              that skyrocket your business. Our dedicated engineering experts
              and developers create people-centered solutions that stand out and
              surpass your expectations. With Socium, achieve the kind of
              simplicity and innovation previously out of reach.
            </p>
          </section>
          <section>
            <img
              src="./Who-We-Are_1.webp"
              alt=""
              className="max-h-[50vh] object-contain h-screen mt-20 img-fluid "
            />
          </section>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:mt-10  mx-10 ">
          <section>
            <img
              src="./Why-Socium-Partners.webp"
              alt=""
              className=" max-h-[50vh]  object-contain h-screen  img-fluid "
            />
          </section>
          <section className="lg:mt-36  text-white">
            <h1 className=" text-3xl  font-bold text-black">
              Why Socium Partners?
            </h1>
            <p className="mt-2  text-black  ">
              Whether you’re looking to create a new website or develop a custom
              web application, Socium, a leading USA web development company
              with experienced developers, is your place. Has expertise and
              skills to deliver top-quality tailor-made solutions Uses
              cutting-edge technology to deliver scalable, efficient, and secure
              solutions. Take a customized approach to every project to meet
              your unique needs and goals. Design responsive solutions across
              all devices, ensuring your users get a seamless experience across
              all devices.
            </p>
          </section>
        </div>
      </div>
      {/* uppercontent  */}

      {/* crousel  */}
      <div className="lg:mt-5 mt-5">
        <Crousel />
      </div>
      {/* crousel  */}

      {/* Our Services */}
      <div className="  " style={{ backgroundColor: "#edf6ff;" }}>
        {/* main div start  */}
        <h1 className="text-4xl  pt-5 font-bold text-center">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-64 mx-10">
          <section>
            <img
              src="./Website-Development.webp "
              height={400}
              width={400}
              alt=""
              className="max-h-[50vh] object-contain h-screen sm:mt-24  img-fluid "
            />
          </section>
          <section className="sm:mt-24 mx-auto   text-black">
            <h1 className="sm:mx-auto text-4xl mt-5 font-bold">
              Website Development
            </h1>
            <p className="mt-4">
              We understand that your website is the face of your business, and
              our affordable web development services make it possible to design
              and develop captivating custom websites that provide a
              picture-perfect user experience. Our team works closely with you
              to understand your unique requirements and build a website that
              reflects your brand’s identity and goals. From responsive designs
              to complex e-commerce platforms, our custom web application
              development services entitle us to build websites that exceed
              expectations and deliver results.
            </p>
            <button
              type="button"
              className=" btn  text-black p-3 font-bold mt-6"
            >
              learn more{" "}
              <FontAwesomeIcon
                icon="fa-solid fa-arrow-right"
                style={{ color: "#000000" }}
              />
            </button>
          </section>
        </div>

        <div className=" ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-64 mx-10">
            <section className="sm:mt-28 mx-auto text-black">
              <h1 className=" sm:mx-auto  text-4xl mt-5 font-bold">
                Mobile Development
              </h1>
              <p className="mt-4 ">
                We understand that your website is the face of your business,
                and our affordable web development services make it possible to
                design and develop captivating custom websites that provide a
                picture-perfect user experience. Our team works closely with you
                to understand your unique requirements and build a website that
                reflects your brand’s identity and goals. From responsive
                designs to complex e-commerce platforms, our custom web
                application development services entitle us to build websites
                that exceed expectations and deliver results.
              </p>
              <button
                type="button"
                className=" btn  text-black p-3 font-bold mt-6"
              >
                learn more{" "}
                <FontAwesomeIcon
                  icon="fa-solid fa-arrow-right"
                  style={{ color: "#000000" }}
                />
              </button>
            </section>
            <section>
              <img
                src="./Mobile-Development.webp "
                height={300}
                width={400}
                alt=""
                className="max-h-[50vh] object-contain h-screen sm:mt-28 img-fluid "
              />
            </section>
          </div>
        </div>

        <div className=" ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-64 mx-10">
            <section>
              <img
                src="./Hire-Developers.webp "
                height={400}
                width={400}
                alt=""
                className=" max-h-[50vh] object-contain h-screen sm:mt-28 img-fluid "
              />
            </section>
            <section className="sm:mt-28 mx-autotext-black">
              <h1 className="sm:mx-auto  text-4xl mt-5 font-bold">
                Hire Developers
              </h1>
              <p className="mt-4 ">
                We understand that your website is the face of your business,
                and our affordable web development services make it possible to
                design and develop captivating custom websites that provide a
                picture-perfect user experience. Our team works closely with you
                to understand your unique requirements and build a website that
                reflects your brand’s identity and goals. From responsive
                designs to complex e-commerce platforms, our custom web
                application development services entitle us to build websites
                that exceed expectations and deliver results.
              </p>
              <button
                type="button"
                className=" btn  text-black p-3 font-bold mt-6"
              >
                learn more{" "}
                <FontAwesomeIcon
                  icon="fa-solid fa-arrow-right"
                  style={{ color: "#000000" }}
                />
              </button>
            </section>
          </div>
        </div>
        <div className=" ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-64 mx-10">
            <section className="sm:mt-52 mx-auto float-endtext-black">
              <h1 className="sm:mx-auto text-4xl mt-5 font-bold">
                Digital Marketing
              </h1>
              <p className="mt-4">
                We understand that your website is the face of your business,
                and our affordable web development services make it possible to
                design and develop captivating custom websites that provide a
                picture-perfect user experience. Our team works closely with you
                to understand your unique requirements and build a website that
                reflects your brand’s identity and goals. From responsive
                designs to complex e-commerce platforms, our custom web
                application development services entitle us to build websites
                that exceed expectations and deliver results.
              </p>
              <button
                type="button"
                className=" btn  text-black p-3 font-bold mt-6"
              >
                learn more{" "}
                <FontAwesomeIcon
                  icon="fa-solid fa-arrow-right"
                  style={{ color: "#000000" }}
                />
              </button>
            </section>
            <section>
              <img
                src="./dm.webp "
                height={400}
                width={400}
                alt=""
                className="max-h-[50vh] object-contain h-screen mb-10 sm:mt-52 img-fluid "
              />
            </section>
          </div>
        </div>
      </div>
      {/* main div closed*/}
      {/* Our Services */}

      {/* cards */}
      <h2 className="sm:mx-36 text-3xl"> Portfolio</h2>
      <div className="justify-center items-center flex ">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mx-10 sm:mx-20 gap-20 sm:mt-20">
          <Tilt>
            <div>
              <img
                src="./i-1.webp"
                height={210}
                width={400}
                className="h-80 rounded-xl "
                alt=""
              />
              <p className="text-center text-2xl">Share & Care </p>
              <button className="mx-auto block text-lg">Explore</button>
            </div>
          </Tilt>
          <Tilt>
            <div>
              <img
                src="./Hangry.webp"
                height={215}
                width={400}
                className="h-80 rounded-xl "
                alt=""
              />
              <p className="text-center text-2xl">Hangry</p>
              <button className="mx-auto block text-lg">Explore</button>
            </div>
          </Tilt>
          <Tilt>
            <div>
              <img
                src="./i-2.webp"
                height={400}
                width={400}
                className="h-80 rounded-xl "
                alt=""
              />
              <p className="text-center text-2xl">Pointse </p>
              <button className="mx-auto block text-lg">Explore</button>
            </div>
          </Tilt>
        </div>
      </div>
      <BackgroundImageComponent />
      {/* cards  */}
      {/* <SimpleParallax>
    <Image src="image.jpg" alt="image" width={1024} height={1920} />
  </SimpleParallax> */}
      <h2 className="sm:mx-36 text-3xl sm:mt-10"> Our Blogs</h2>
      <div className="justify-center items-center flex ">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:gap-18 ">
          <div className=" sm:mt-12">
            <FlippingCard
              className=""
              style={{ height: "460px", width: "400px" }}
            >
              <FlippingCardBack>
                <div className="relative">
                  <img src="./fc1.jpg" alt="" />
                </div>
                <p className="mx-auto ">
                  A Comprehensive Guide to Hiring Developers for Your Startup
                  Hire developers for startups who will contribute to its vision
                  and goals!
                </p>{" "}
              </FlippingCardBack>
              <FlippingCardFront>
                <div className="h-screen max-[200]:">
                  <img
                    src="./gif.gif"
                    style={{ height: "300px", width: "500px" }}
                    alt=""
                  />
                  <button className="btn absolute top-0 end-0 mx-2 bg-[#e4e4e4] rounded-lg sm:mt-2 p-1">
                    View all{" "}
                  </button>
                  <p className="mx-auto font-bold text-xl">
                    A Comprehensive Guide to Hiring Developers for Your Startup{" "}
                  </p>
                  <p className="sm:pt-5">
                    {" "}
                    Hire developers for startups who will contribute to its
                    vision and goals!
                  </p>
                </div>
              </FlippingCardFront>
            </FlippingCard>
          </div>
          <div className=" sm:mt-12">
            <FlippingCard style={{ height: "460px", width: "400px" }}>
              <FlippingCardBack>
                <div className="relative">
                  <img src="./fc1.jpg" alt="" />
                </div>
                <p className="mx-auto">
                  Understand the differences between a freelance and an in-house
                  web developer to hire the best talents in the industry.
                </p>{" "}
              </FlippingCardBack>
              <FlippingCardFront>
                <div className="h-screen max-[200]:">
                  <img
                    src="./gif.gif"
                    style={{ height: "300px", width: "500px" }}
                    alt=""
                  />
                  <button className="btn absolute top-0 end-0 mx-2 bg-[#e4e4e4] rounded-lg sm:mt-2 p-1">
                    View all{" "}
                  </button>
                  <h2 className=" me-6 mt-2 text-xl font-bold">
                    Freelance vs. In-House Developers: Which Should You Choose?
                  </h2>
                  <p className="sm:pt-5">
                    Understand the differences between a freelance and an
                    in-house web developer to hire the best talents in the
                    industry.
                  </p>
                </div>
              </FlippingCardFront>
            </FlippingCard>
          </div>
          <div className="sm:mt-12">
            <FlippingCard style={{ height: "460px", width: "400px" }}>
              <FlippingCardBack>
                <div className="relative">
                  <img
                    src="./fc1.jpg"
                    style={{ height: "300px", width: "500px" }}
                    alt=""
                  />
                </div>
                <p className="mx-auto">
                  A Comprehensive Guide to Hiring Developers for Your Startup
                  Hire developers for startups who will contribute to its vision
                  and goals!
                </p>{" "}
              </FlippingCardBack>
              <FlippingCardFront>
                <div className="h-screen max-[200]:">
                  <img
                    src="./gif.gif"
                    style={{ height: "300px", width: "500px" }}
                    alt=""
                  />
                  <button className="btn absolute top-0 end-0 mx-2 bg-[#e4e4e4] rounded-lg sm:mt-2 p-1">
                    View all{" "}
                  </button>
                  <h2 className=" me-6 mt-2 text-xl font-bold">
                    Optimizing Mobile App Performance: Tips and Techniques
                  </h2>
                  <p className="sm:pt-5">
                    "Optimize your mobile app’s performance to safeguard its
                    features, ensure a positive user experience, and boost SEO.
                    "
                  </p>
                </div>
              </FlippingCardFront>
            </FlippingCard>
          </div>
        </div>
      </div>

      <button
        className="py-3 sm:mt-5 px-8 bg-orange-500 text-white rounded-full mx-auto block"
        type="button"
      >
        See All
      </button>

        
      <footer>
        <Footer />
      </footer>
    </>
  );
}
