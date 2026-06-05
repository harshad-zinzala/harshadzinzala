import { useState } from "react";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className=" grid sm:grid-cols-[30%_70%]">
      <div>
        <p className="font-semibold sm:text-xl">{`${data?.id}. ${data?.title}`}</p>
        <p className="text-[13px] sm:text-[16px] text-[#697482]">{data?.position}</p>
        <p className="text-[13px] sm:text-[16px] text-[#697482]">{data?.duration}</p>
      </div>
      <div>
        <p className="text-[13px] sm:text-[16px] text-[#697482]">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default WorkSteps;
