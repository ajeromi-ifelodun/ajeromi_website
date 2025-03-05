"use client";
import React from "react";
import ExecutiveCard from "./_shared/executivecard";
import chairman from "../../public/static/image/chairmanimg.png";
import exec2 from "../../public/static/image/exec2.png";
import exec3 from "../../public/static/image/execimg3.png";
import exec4 from "../../public/static/image/execimg4.png";
import exec5 from "../../public/static/image/execimg5.png";
import exec6 from "../../public/static/image/execimg6.png";
const PageClient = () => {
  return (
    <div className="mt-28 parent-wrap">
      <div>
        <h3 className="sectionheader text-pjgreen">Executive Team</h3>
        <p className="opacity-50">Council Officials</p>
        <div className="w-[85%] md:w-[25rem] h-[5px] bg-pjgreen mt-2" />
      </div>
      <div className="grid grid-cols-2 gap-1 md:grid-cols-5 md:gap-4 mt-8 items-stretch">
        <ExecutiveCard
          img={chairman}
          isLarge
          title="Executive Chairman"
          name="Hon. Fatai Ayinde Adekunle Ayoola"
        />
        <div className="h-full flex flex-col">
          <ExecutiveCard
            img={exec2}
            title="Vice Chairman"
            name="Hon. Lucky Uduikwe"
          />
        </div>
        <div className="h-full flex flex-col">
          <ExecutiveCard
            img={exec3}
            title="Leader of the House"
            name=" Hon. Kehinde Arogundade"
          />
        </div>
        <ExecutiveCard
          img={exec4}
          title="Council Manager"
          name="Hon. Rahmon Rafiu Babatunde"
        />
        <ExecutiveCard
          img={exec5}
          title="Secretary to the Local Government (SLG)"
          name="Hon. Lukman Jimoh"
        />
        <ExecutiveCard
          img={exec6}
          title="Human Resource Officer"
          name="Mr. Shitta, Ismail Korede"
        />
      </div>
    </div>
  );
};

export default PageClient;
