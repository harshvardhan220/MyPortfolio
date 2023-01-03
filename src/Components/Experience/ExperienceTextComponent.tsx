import React from "react";

interface ExperienceTextProps {
  companyName?: String;
  timeSpan?: String;
  designation?: String;
  descriptionComponent?: JSX.Element;
}

const ExperienceTextComponent = ({
  companyName,
  timeSpan,
  designation,
  descriptionComponent,
}: ExperienceTextProps) => {
  return (
    <div className="text-sm">
      <div className="mb-[5px] text-[#43D9AD]">
        * {companyName} {timeSpan}
      </div>
      <p className="text-[#E99287]">{designation ?? ""}</p>
      <div className="mt-[5px] flex flex-col">{descriptionComponent}</div>
    </div>
  );
};

export default ExperienceTextComponent;
