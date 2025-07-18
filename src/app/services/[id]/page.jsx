import React from "react";

const ServiceDetails = ({ params }) => {
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
  const { id } = params;
  const singleData = data.find((service) => service._id === id);
  return (
    <div>
      <h1 className="text-2xl font-bold">Service Details</h1>
      <p>Service ID: {singleData ? singleData._id : "Not found"}</p>
      {singleData ? (
        <div>
          <h2 className="text-xl font-semibold">{singleData.service_name}</h2>
          <p>{singleData.service_description}</p>
        </div>
      ) : (
        <p>Service not found.</p>
      )}
    </div>
  );
};

export default ServiceDetails;
