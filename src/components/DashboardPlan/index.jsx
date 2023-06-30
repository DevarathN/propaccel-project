import React from "react";

import { Button, Img, Text } from "components";

const DashboardPlan = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ overflow: "hidden", textAlign: "left", display: "flex" }}
      >
        <div className="flex flex-col gap-4 items-start justify-start w-[264px]">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtInterBold16Black900"
          >
            {props?.basicplan}
          </Text>
          <Text
            className="max-w-[264px] md:max-w-full text-black-900 text-xs"
            size="txtPoppinsRegular12"
          >
            {props?.loremipsumissimOne}
          </Text>
        </div>
        <div className="flex flex-row gap-[19px] items-center justify-start w-auto">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-purple-700 w-auto"
            size="txtInterBold32Purple700"
          >
            {props?.price}
          </Text>
          <Text
            className="text-purple-700 text-sm w-auto"
            size="txtPoppinsRegular14Purple700"
          >
            {props?.month}
          </Text>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <ul>
            <li>
              <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtInterBold12"
                >
                  {props?.freeaccesstovidOne}
                </Text>
              </div>
            </li>
            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
              <Text
                className="text-black-900 text-xs w-auto"
                size="txtInterBold12"
              >
                {props?.freeaccesstovidThree}
              </Text>
            </div>
            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
              <Text
                className="text-black-900 text-xs w-auto"
                size="txtInterBold12"
              >
                {props?.freeaccesstovidFive}
              </Text>
            </div>
          </ul>
        </div>
        <Button className="border border-purple-700 border-solid cursor-pointer font-poppins leading-[normal] min-w-[149px] py-[13px] rounded-[5px] text-center text-purple-700 text-xs">
          {props?.startFreeTrial}
        </Button>
      </div>
    </>
  );
};

DashboardPlan.defaultProps = {
  basicplan: "Basic Plan",
  loremipsumissimOne:
    "Lorem Ipsum is simply dummy text of the printing and typesetting",
  price: "$ 54",
  month: "/month",
  vector: "images/img_vector_black_900.svg",
  freeaccesstovidOne: "Free access to video class",

  freeaccesstovidThree: "Free access to video class",

  freeaccesstovidFive: "Free access to video class",
  startFreeTrial: "Start Free Trial",
};

export default DashboardPlan;
