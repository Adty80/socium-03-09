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
          <h1 className="sm:mx-auto text-4xl mt-5 font-bold ">Pointse</h1>
          <p className="mt-4 ">
            At its completion, Pointse will be the first-ever platform designed
            exclusively for retail vendors, offering the seamless integration of
            three essential components: a loyalty program, human resource
            management, and business analytics.
          </p>
        </section>
        <section>
          <img
            src="./Low-code-development-amico-2.webp "
            alt=""
            className=" mt-5 img-fluid "
          />
        </section>
      </div>

      <div className="grid grid-cols-1 lg:mx-36 mx-16 mt-4">
        <h1 className="font-bold text-3xl text-orange-400 lg:mt-12">
          Client Background
        </h1>
        <p className="mt-3">
          Eric Johnson, not only a successful retailer with seven thriving
          stores in Nebraska but also a forward-thinking developer, saw a gap in
          the retail market that inspired him to take action. He encountered
          significant hurdles in achieving operational efficiency in his stores
          due to the absence of a unified platform that seamlessly integrates
          customer loyalty program, and Workforce Management with his Point of
          Sales (POS) system. The lack of such an integrated solution resulted
          in heightened operational costs, fragmented reporting, ineffective
          workforce management, a dearth of data-driven insights, and reliance
          on manual processes. To overcome these challenges, he developed a
          proprietary inventory prediction system, which enables him to manage
          inventory with an impressive 93% accuracy rate. However, it was not
          enough for the evolving industry dynamics. He made the strategic
          decision to expand his vision and create a Software as a Service
          (SaaS) product that can be leveraged by other retail stores.
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
            <h1 className="sm:mx-auto text-4xl mt-5 font-bold">Project Goal</h1>
            <p className="mt-4">
              The goal is to develop a comprehensive platform that integrates
              Loyalty Programs, Workforce Management, and Business Analytics
              into one unified platform. Using Pointse, vendors can easily
              control employee access to sensitive data, reduce reliance on
              manual processes, produce informative reports, and eliminate the
              need for multiple subscriptions. In addition, we will integrate
              proprietary inventory management software, ensuring accurate stock
              levels and implement auto-scheduling to reduce payroll costs while
              enhancing customer satisfaction.
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
              <h1 className=" sm:mx-auto  text-4xl mt-5 font-bold">
                Our Approach
              </h1>
              <p className="mt-4 ">
                To develop Pointse, we followed a well-structured and systematic
                approach. Our focus was on delivering a solution that not only
                meets the immediate requirements but also sets the stage for
                long-term success, enhanced operational efficiency, and seamless
                management of loyalty programs, Workforce Management, and
                business analytics.
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
              <h1 className="font-bold text-3xl text-orange-400 lg:mt-12">
                Challenges and Solutions:
              </h1>
              <p className="mt-4 ">
                Undertaking a significant project is inherently challenging due
                to the diverse array of stakeholders, each possessing distinct
                skill sets, including the product owner, business analyst,
                project manager, designer, developer, and tester. The complexity
                lies not only in the collection of business and feature
                requirements from clients but also in the critical task of
                identifying an approach that harmoniously aligns with both the
                technical and client’s business needs. We ensured a daily
                stand-up meeting to guarantee alignment among all stakeholders.
                Additionally, we maintained weekly communication with the
                client, providing them with updates on our progress. Before
                proceeding with development, we presented the design alongside
                our chosen approach for their review and input.
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

      <div className="bg-[#00145b] text-white mt-4">
        <h1 className="text-center font-bold text-4xl py-5">
          Technologies Used
        </h1>
        <p className="lg:mx-36 pt-2">
          During the development of the Pointse project, we employed a range of
          technologies and tools to ensure a streamlined and efficient process.
          These technologies played a crucial role in gathering requirements,
          designing the user interface, project management, client
          communication, and development
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:mx-36 py-6 mx-12">
          <div className="lg:mt-24">
            <ul>
              <li className="pb-3">
                Microsoft Word Documents: We utilized Microsoft Word documents
                as a primary tool for collecting and documenting business and
                feature requirements from the client. This allowed us to
                maintain a structured and organized record of project details.
              </li>
              <li className="py-5">
                Figma: Figma was instrumental in the design phase of the
                project. It served as our platform for creating wireframes and
                UI designs. Using Figma, we could visualize the user interface
                before transitioning to the development phase.
              </li>
              <li className="py-5">
                Jira: For effective project management, we relied on Jira. This
                powerful project management tool enabled us to create sprints,
                track progress, and manage various project tasks. It ensured
                that the project stayed on course and milestones were met.
              </li>
              <li className="py-5">
                Google Meet: Communication with the client was crucial for
                keeping everyone informed and aligned. We used Google Meet for
                online meetings and video conferencing, facilitating regular
                discussions and updates with the client.
              </li>
            </ul>
          </div>
          <div className="">
            <img src="./i-2.webp" alt="" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:mx-36 mx-16 mt-4">
        <h1 className="font-bold text-3xl text-orange-400 lg:mt-12 text-center">
          Result and Output:
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
      

 
<Footer/>

    </>
  );
};

export default page;
