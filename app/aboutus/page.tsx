import React from 'react';

const teamMembers = [
  {
    name: "Shreya Chopra",
    role: "Founder &amp; MD", // Already properly escaped
  },
  {
    name: "Priyanka Singh",
    role: "Product Manager",
  },
  {
    name: "Pranshi Singh",
    role: "Legal Head",
  },
  {
    name: "Susrith Godavarthi",
    role: "IT Team &amp; Social Media", // Already properly escaped
  },
  {
    name: "Suvigya Tiwari",
    role: "AI &amp; IPR",
  },
  {
    name: "Ankit Kumar",
    role: "Legal Researcher", // No role specified for Suvigya
  },
  {
    name: "Kaushaki Kumari",
    role: "Legal Researcher", // No role specified for Suvigya
  },
];

const AboutUs = () => {
  return (
    <div className="relative px-6 lg:px-8 bg-white rounded-lg shadow-md mt-16 mb-64 py-12 min-h-screen">
      {/* Background logo */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10"
        style={{ backgroundImage: "url('/assets/logo/ilc-logo.svg')" }}
      ></div>

      {/* Content overlay */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold tracking-tight text-[#a47c38] text-center mb-12">
          About Us
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-3xl font-semibold text-[#a47c38] mb-4 tracking-wide">Who We Are</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Integrated Legal Circle (I.&amp;L.C.) is a dynamic startup committed to empowering the legal
              community by fostering connections and providing comprehensive resources. We offer a
              robust platform encompassing both online and offline legal training, certified
              courses, and access to specialized legal expertise. Our core mission is to bridge the
              critical gap between academic legal education and practical application in the
              professional world. We achieve this by facilitating meaningful connections between
              skilled professionals, leading companies, universities, and multinational
              corporations (MNCs). Through our integrated approach, we empower individuals with the
              essential skills and knowledge necessary to not only survive but thrive in todays
              competitive legal landscape.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#a47c38] mb-4 tracking-wide">Our Vision</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              We envision a future where all legal professionals, regardless of their background,
              have access to the resources and support they need to reach their full potential. We
              strive to create a platform that cultivates highly skilled, well-prepared individuals
              and seamlessly connects them with rewarding career opportunities through targeted value
              enhancement programs.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#a47c38] mb-4 tracking-wide">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Our mission is to empower aspiring and established legal professionals by bridging the
              gap between theoretical knowledge and practical expertise. We achieve this through
              value-driven training, mentorship, and networking opportunities that provide both
              learning and earning potential. We are dedicated to fostering a community of skilled
              individuals who are prepared to excel in their legal careers.
            </p>
          </section>

          <h2 className="text-[#a47c38] text-2xl font-bold text-center underline mt-16 mb-8">Our Core Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-[#a47c38] text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
