import Link from "next/link";
import React from "react";

const ServicesPage = () => {
  const data = [
    {
      _id: "1a2b3c4d5e6f",
      service_name: "Web Development",
      service_description:
        "Building responsive and modern websites tailored to client needs.",
    },
    {
      _id: "2b3c4d5e6f7g",
      service_name: "UI/UX Design",
      service_description:
        "Designing intuitive user interfaces and seamless user experiences.",
    },
    {
      _id: "3c4d5e6f7g8h",
      service_name: "SEO Optimization",
      service_description:
        "Improving website visibility and ranking on search engines.",
    },
    {
      _id: "4d5e6f7g8h9i",
      service_name: "Content Writing",
      service_description:
        "Creating engaging and SEO-friendly content for websites and blogs.",
    },
    {
      _id: "5e6f7g8h9i0j",
      service_name: "Digital Marketing",
      service_description:
        "Promoting businesses through social media, email campaigns, and ads.",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold">Our Services</h1>
      <p>We offer a variety of services to help you succeed.</p>
      <ul className="list-disc pl-5">
        {data.map((service) => (
          <li key={service._id} className="my-2">
            <h2 className="text-xl font-semibold">{service.service_name}</h2>
            <p>{service.service_description}</p>
            <Link href={`/services/${service._id}`} className="text-blue-500">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;
