import React, { useEffect } from "react";
import Profile from "./Profile";
import { profiles } from "../profiles";
import AOS from 'aos';
import 'aos/dist/aos.css';

function OurTeam() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="mx-2 mt-10 xl:ml-24 xl:mr-24">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center">
        <h3 id="heading" className="text-6xl max-lg:text-5xl font-semibold font-martian-sunrise">
          Our team
        </h3>
        <br />
        <div className="w-[80%] max-w-screen-lg flex justify-center"></div>
      </div>

      {/* Profile Section */}
      <div
        id="profile"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-10"
        data-aos="fade-right"
      >
        {profiles.map((profile, idx) => (
          <Pxrofile
            key={idx}
            imag={profile.imag}
            role={profile.role}
            name={profile.name}
            insta={profile.insta}
            twit={profile.twit}
            lin={profile.lin}
            git={profile.git}
            clubsite={profile.clubsite}
            logo={profile.logo}
          />
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
