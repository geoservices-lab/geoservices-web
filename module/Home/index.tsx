import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";

import EnergyEvolutionSection from "./EnergyEvolutionSection";
import OurSpecialtySection from "./OurSpecialtySection";
import LatestUpdateSection from "./LatestUpdateSection";
import UpcomingTrainingSection from "./UpcomingTrainingSection";

const Home = () => {
  const [data, setData] = useState("");
  const configuredSanityClient = createClient({
    projectId: "miib670e",
    dataset: "production",
    useCdn: true,
  });

  const callAPI = async () => {
    try {
      const res = await fetch(
          `https://miib670e.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "home"]`
      );
      const data = await res.json();
      setData(data.result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <>
      <EnergyEvolutionSection
        configuredSanityClient={configuredSanityClient}
        data={data[0]}
      />
      <div className="mt-42">
      <OurSpecialtySection/>
      <LatestUpdateSection />
      <UpcomingTrainingSection />
      </div>

    </>
  );
};

export default Home;
