"use client";
import React from "react";
import Footer from "../Footer";

const page = () => {
  return (
    <>
      {/* upper content  */}

      <div
        style={{ backgroundColor: "#00145b;" }}
        className="sec1 grid grid-cols-1 sm:grid-cols-2 "
      >
        <section className="mt-52 lg:mx-16 float-end  text-white">
          <h1 className="sm:mx-auto text-4xl mt-5 font-bold ">B2Gig</h1>
          <p className="mt-4 ">
            At its completion, Pointse will be the first-ever platform designed
            exclusively for retail vendors, offering the seamless integration of
            three essential components: a loyalty program, human resource
            management, and business analytics.
          </p>
        </section>
        <section>
          <img
            src="./12-removebg-preview.webp "
            alt=""
            className=" mt-5 img-fluid "
          />
        </section>
      </div>

      <div className="grid grid-cols-1 lg:mx-36 mx-16 mt-4">
      <h1 className="font-bold text-3xl text-orange-400 lg:mt-12">
      Background
        </h1>
        <p className="mt-3">
          Socium Services collaborated with B2Gig to engineer a sophisticated
          system, streamlining the connection between customers seeking services
          and the businesses and contractors executing them on-site. Socium
          orchestrated the development of a web-based dashboard tailored for
          businesses using the latest web tech stack such as HTML5, CSS3,
          ReactJs, NodeJs along with its subsidiary libraries such as Redux and
          Express. This intuitive interface empowers businesses to seamlessly
          schedule and manage appointments, while also overseeing their
          workforce, assigning confirmed appointments, and monitoring job
          progress from initiation to completion. Harnessing GPS capabilities
          within employees’ mobile devices, the dashboard ensures real-time
          tracking. Furthermore, Socium seamlessly integrated diverse payment
          gateways—PayPal, Braintree, Venmo, and credit/debit cards—facilitating
          frictionless transactions upon job completion.
        </p>
      </div>

      <div className="  ">
        {/* main div start  */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-64 mx-10">
          <section>
            <img
              src="./Website-Development.webp "
              height={400}
              width={400}
              alt=""
              className="max-h-[50vh] object-contain h-screen lg:mt-52  img-fluid "
            />
          </section>
          <section className="sm:mt-52 mx-auto   text-black">
            <h1 className="sm:mx-auto text-4xl mt-5 font-bold text-orange-400">
              Enhancing Field Operations
            </h1>
            <p className="mt-4">
              In tandem with the business dashboard, Socium engineered a bespoke
              iOS and Android application tailored for field employees. The
              application boasts customized calendar views, offering a
              comprehensive overview of forthcoming appointments with detailed
              specifics for each.
            </p>
            <button
              type="button"
              className=" btn  text-black p-3 font-bold mt-6"
            >
              learn more{" "}
            </button>
          </section>
        </div>

        <div className=" ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-64 mx-10">
            <section className="sm:mt-28 mx-auto text-black">
              <h1 className="sm:mx-auto text-4xl mt-5 font-bold text-orange-400">
                Empowering Communication
              </h1>
              <p className="mt-4 ">
                To maintain transparent communication, the app notifies
                customers of an employee’s en-route status, provides
                navigational guidance, and allows for real-time updates upon
                arrival.
              </p>
              <button
                type="button"
                className=" btn  text-black p-3 font-bold mt-6"
              >
                learn more{" "}
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
              <h1 className="sm:mx-auto text-4xl mt-5 font-bold text-orange-400">
                Streamlining Workflows
              </h1>
              <p className="mt-4 ">
                On-site, employees initiate jobs through the app, activating a
                timer for precise time tracking. They can also capture vital
                notes and visual confirmations before marking the task as
                completed, thus concluding the timer. Post-completion, employees
                effortlessly generate invoices based on tracked time, sending
                them via text or email. Multiple payment options, including
                cash, cards, and online methods, facilitate seamless
                transactions.
              </p>
              <button
                type="button"
                className=" btn  text-black p-3 font-bold mt-6"
              >
                learn more{" "}
              </button>
            </section>
          </div>
        </div>
      </div>
      {/* main div closed*/}
      {/* Our Services */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-64 mx-10">
        
        <section className="sm:mt-52 mx-auto   text-black">
          <h1 className="sm:mx-auto text-4xl mt-5 font-bold text-orange-400">
            Administrative Empowerment
          </h1>
          <p className="mt-4">
            Socium engineered a hierarchical administrative framework,
            distinguishing roles such as business owner, supervisor, and super
            admin. Super admins were granted the capability to access client
            systems for troubleshooting purposes, ensuring operational
            continuity.
          </p>
          <button type="button" className=" btn  text-black p-3 font-bold mt-6">
            learn more{" "}
          </button>
        </section>
        <section>
          <img
            src="./Website-Development.webp "
            height={400}
            width={400}
            alt=""
            className="max-h-[50vh] object-contain h-screen lg:mt-52  img-fluid "
          />
        </section>
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
            <h1 className="sm:mx-auto text-4xl mt-5 font-bold text-orange-400">
            Conclusion
            </h1>
            <p className="mt-4 ">
              Socium Services’ strategic integration of cutting-edge technology
              revolutionized B2Gig’s operations, offering a seamless, end-to-end
              solution that optimizes workflows, enhances customer
              communication, and simplifies financial transactions. The
              architected system not only empowers businesses but also empowers
              the workforce, resulting in a more efficient and profitable
              operation.
            </p>
            <button
              type="button"
              className=" btn  text-black p-3 font-bold mt-6"
            >
              learn more{" "}
            </button>
          </section>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:mx-36 mx-16 mt-4">
        <h1 className="font-bold text-3xl text-orange-400 lg:mt-12 text-center">
        Why B2Gig
        </h1>
        <p className="mt-3">
          The integration of Loyalty Program, Workforce Management, and Business
          Analytics into one platform will create a comprehensive
          intra-reporting system, such as allowing for in-depth analysis of
          employee performance based on rewards, sales, and actual hours worked.
          This eliminates the need for employees to switch between multiple
          platforms for various operational tasks, ensuring utmost convenience.
          Moreover, employers can easily manage employee authorizations,
          restricting access to sensitive information within the platform. With
          this unified solution, there is no longer a requirement to engage with
          different companies for distinct operational needs, avoiding separate
          subscription expenses. The system efficiently oversees inventory
          management and employee scheduling, streamlining operations,
          simplifying tasks, and significantly enhancing overall efficiency for
          both employees and employers. As a result, business management becomes
          a seamless and hassle-free experience.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default page;
