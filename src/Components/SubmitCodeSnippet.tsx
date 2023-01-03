import React from 'react'
interface SubmitCodeSnippetType {
    formData: any;
}
const SubmitCodeSnippet = ({formData}: SubmitCodeSnippetType ) => {
  return (
    <div className=" text-[6px] mt-[90px] text-[#fff]">
              <div className="flex flex-col text-lg">
                <div className="flex">
                  1 &nbsp;<span className="text-[#C98BDF]"> const </span>
                  &nbsp;
                  <span className="text-[#5565E8]">button</span>
                  &nbsp; <span className="text-[#5565E8]">=</span>
                  &nbsp;{" "}
                  <span className="text-[#5565E8]">
                    document.querySelector(
                    <span className="text-[#FEA55F]">'#sendBtn'</span>);
                  </span>
                </div>
                <div className="flex">2</div>
                <div className="flex">
                  3 &nbsp;<span className="text-[#C98BDF]"> const </span>
                  &nbsp;
                  <span className="text-[#5565E8]">message</span>
                  &nbsp; <span className="text-[#5565E8]">=</span>
                  &nbsp; <span className="text-[#FFF]">&#123;</span>
                </div>
                <div className="flex">
                  4 &nbsp;
                  <span className="text-[#5565E8]"> name: </span>
                  &nbsp; <span className="text-[#FEA55F]">{`"${formData?.name ?? ""}"`}</span>,
                </div>
                <div className="flex">
                  5 &nbsp;<span className="text-[#5565E8]"> email: </span>
                  &nbsp; <span className="text-[#FEA55F]">{`"${formData?.email ?? ""}"`}</span>,
                </div>
                <div className="flex">
                  6 &nbsp;<span className="text-[#5565E8]"> message: </span>
                  &nbsp; <span className="text-[#FEA55F]">{`"${formData?.message ?? ""}"`}</span>,
                </div>
                <div className="flex">
                  7 &nbsp;<span className="text-[#FFF]"> &#125;</span>
                </div>
                <div className="flex">8</div>
                <div className="flex">
                  9&nbsp;
                  <span className="text-[#5565E8]">
                  &nbsp;button.addEventListener(
                    <span className="text-[#FEA55F]">'#click'</span>), <span className="text-[#fff]">()</span> <span className="text-[#C98BDF]">=&gt;</span>&#123;
                  </span>
                </div>
                <div className="flex">
                10 
                  <span className="text-[#5565E8]"> &nbsp; &nbsp;form.send(message);</span>
                </div>
                <div className="flex">
                11 &nbsp;
                  <span className="text-[#5565E8]">  &#125;&#41;</span>
                </div>
              </div>
            </div>
  )
}

export default SubmitCodeSnippet