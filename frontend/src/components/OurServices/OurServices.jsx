import { useState } from "react";
import { Link } from "react-router-dom";
import "./OurServices.css";
import { assets } from "../../components/assets/assets";

const services = [
  {
    category: "Development",
    services: [
      {
        title: "Software Development",
        description:
          "Software development encompasses the processes involved in creating, designing, deploying, and maintaining software applications, systems, or platforms.",
        logo: assets.softwaredevelopment,
        link: "/software-development",
      },
      {
        title: "Application Development",
        description:
          "Web application development is the process of creating software applications that are accessed through web browsers over a network, typically the internet.",
        logo: assets.applicationdevelopment,
        link: "/application-development",
      },
      {
        title: "Web Application Development",
        description:
          "Web application development is the process of creating software applications that are accessed through web browsers over a network, typically the internet.",
        logo: assets.webapplication,
        link: "/web-application-development",
      },
    ],
  },
  {
    category: "Services",
    services: [
      {
        title: "Project Services",
        description:
          "Project services encompass a range of activities and support mechanisms aimed at managing and executing projects effectively",
        logo: assets.projectservices,
        link: "/project-services",
      },
      {
        title: "Cloud Services",
        description:
          'Cloud services refer to computing services delivered over the internet, also known as "the cloud."',
        logo: assets.cloudservices,
        link: "/cloud-service",
      },
      {
        title: "Consulting Services",
        description:
          "Software consulting services involve providing expert guidance, advice, and support to clients in various aspects of software development and IT strategy.",
        logo: assets.consultingservices,
        link: "/consulting-services",
      },
    ],
  },
  {
    category: "Management",
    services: [
      {
        title: "Resource Management",
        description:
          "Resource management involves the efficient and effective allocation, utilization, and optimization of resources within an organization to achieve its objectives.",
        logo: assets.resourcemanagement,
        link: "/resource-management",
      },
      {
        title: "Data Management",
        description:
          "Data management involves the process of acquiring, storing, organizing, protecting, and analyzing data to ensure its accuracy, reliability,",
        logo: assets.datamanagement,
        link: "/data-management",
      },
      {
        title: "Azure Infra Management",
        description:
          "Data management involves the process of acquiring, storing, organizing, protecting, and analyzing data to ensure its accuracy, reliability,",
        logo: assets.assure,
        link: "/azure-management",
      },
    ],
  },
  {
    category: "Specialized Service",
    services: [
      {
        title: "Data Lake Services",
        description:
          " Our Data Lake services provide a centralized repository to store all your structured and unstructured data at any scale. We help you manage and utilize your data effectively.",
        logo: assets.datalake,
        link: "/dl-services",
      },
      {
        title: "Application Modernizaition",
        description:
          "Our Application Modernization services help you transform your legacy applications into modern, scalable, and efficient solutions",
        logo: assets.appmodren,
        link: "/am-services",
      },
      {
        title: "AI Analytics",
        description:
          "Our AI Analytics services leverage artificial intelligence and machine learning to transform your data into actionable insights",
        logo: assets.aianalatics,
        link: "/ai-services",
      },
    ],
  },
];

const OurServices = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    services[0].category
  );

  const renderServices = () => {
    const category = services.find(
      (service) => service.category === selectedCategory
    );

    return category.services.map((service, index) => (
      <Link to={service.link} key={index} className="card">
        <div className="card-content">
          <img
            src={service.logo}
            alt={service.title}
            className="service-logo"
          />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      </Link>
    ));
  };

  return (
    <div className="services-section">
      <div className="service-head">
        <h1>Our Services</h1>
      </div>
      <div className="service-header">
        <p>
          We Offer A Wide Range Of Services And Provide Realtime Data Solutions
        </p>
      </div>
      <div className="categories">
        {services.map((service, index) => (
          <button
            key={index}
            className={`category-button ${
              selectedCategory === service.category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(service.category)}
          >
            {service.category}
          </button>
        ))}
      </div>
      <div className="cards-container">{renderServices()}</div>
    </div>
  );
};

export default OurServices;
