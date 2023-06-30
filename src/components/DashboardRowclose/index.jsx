import React from "react";

import { Img, Text } from "components";

const DashboardRowclose = (props) => {
  return (
    <>
      <div className={props.className}>
        {!!props?.close ? (
          <Img
            className="h-[50px] rounded-[50%] w-[50px]"
            alt="close"
            src="props?.close"
          />
        ) : null}
        <div className="flex flex-col gap-6 items-start justify-start w-auto">
          <div className="flex flex-row gap-6 items-center justify-start w-auto">
            <Img
              className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
              src="images/img_lolla1.png"
              alt="lollaOne"
            />
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <Text
                  className="text-base text-black-900 w-[86px]"
                  size="txtInterBold16Black900"
                >
                  {props?.lollasmith}
                </Text>
                <Text
                  className="text-black-900 text-sm w-[65px]"
                  size="txtPoppinsRegular14"
                >
                  {props?.microsoft}
                </Text>
              </div>
              <Img
                className="h-5 w-[132px]"
                src="images/img_frame20.svg"
                alt="frameTwenty"
              />
            </div>
          </div>
          <Text
            className="max-w-[369px] md:max-w-full text-black-900 text-xs"
            size="txtPoppinsRegular12"
          >
            {props?.description}
          </Text>
        </div>
      </div>
    </>
  );
};

DashboardRowclose.defaultProps = {
  lollasmith: "Lolla Smith",
  microsoft: "Microsoft",
  description: (
    <>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry&#39;s standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make{" "}
    </>
  ),
};

export default DashboardRowclose;
