"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import Administrative from "../../components/Administrative";
import Strategy from "../../components/Strategy";
import DesignAndDevelopment from "../../components/DesignAndDevelopment";
import SpecializedServices from "../../components/SpecializedServices";
import MarketingDigitalMarketing from "../../components/MarketingDigitalMarketing";

const ServicePage = ({ params: paramsPromise }) => {
  // Unwrap params using React.use()
  const params = React.use(paramsPromise);
  const [service, setService] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (params?.service) {
      setService(params.service);
    }
  }, [params]);

  if (!service) return <p>Loading...</p>;

  // Function to render service details based on the service name
  const renderServiceContent = () => {
    switch (service) {
      case "administrative":
        return <Administrative />;
      case "strategy":
        return <Strategy />;
      case "design-development":
        return <DesignAndDevelopment />;
      case "specialized-services":
        return <SpecializedServices />;
      case "marketing-digital-marketing":
        return <MarketingDigitalMarketing />;
      default:
        return <p>Service not found.</p>;
    }
  };

  return (
    <section style={{ color: "white", padding: "2rem" }}>
      <h1 style={{ color: "#1263FF", fontSize: "3rem" }}>
        {service
          ? `${service.charAt(0).toUpperCase() + service.slice(1)} Services`
          : "Service Not Found"}
      </h1>

      {/* Render the service content based on the service name */}
      {renderServiceContent()}
    </section>
  );
};

export default ServicePage;
