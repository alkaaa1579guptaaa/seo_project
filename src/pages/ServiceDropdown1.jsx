import React from "react";
import ServiceBanner from "@/components/Services/Service-Dropdown/ServiceBanner";
import ServiceIntro from "@/components/Services/Service-Dropdown/ServiceIntro";
import ServiceSEO from "@/components/Services/Service-Dropdown/ServiceSEO";
import ServiceSocialMediaMarketing from "@/components/Services/Service-Dropdown/ServiceSocialMediaMarketing";
import ServiceSocialMedia from "@/components/Services/Service-Dropdown/ServiceSocialMedia";
import ServiceStrategies from "@/components/Services/Service-Dropdown/ServiceStrategies";
import ServiceContactUs from "@/components/Services/Service-Dropdown/ServiceContactUs";

const ServiceDropdown1 = () => {
  return (
    <>
      <ServiceBanner />
      <ServiceIntro />
      <ServiceSEO />
      <ServiceSocialMediaMarketing />
      <ServiceSocialMedia/>
      <ServiceStrategies/>
      <ServiceContactUs/>
    </>
  );
};

export default ServiceDropdown1;
