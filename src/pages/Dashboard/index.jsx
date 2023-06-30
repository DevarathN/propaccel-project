import React from "react";

import { Button, Img, List, Text } from "components";
import DashboardPlan from "components/DashboardPlan";
import DashboardRowclose from "components/DashboardRowclose";

const DashboardPage = () => {
  const dashboardPlanPropList = [
    {},
    {
      vector: "images/img_vector_white_a700.svg",
      vectorTwo: "images/img_vector_white_a700.svg",
      vectorOne: "images/img_vector_white_a700.svg",
      basicplan: "Premium Plan",
    },
    {},
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[1313px] items-center justify-start mx-auto pb-[45px] w-full"
            style={{ backgroundImage: "url('images/img_group1.png')" }}
          >
            <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <Text
                className="md:ml-[0] ml-[175px] md:mt-0 my-[35px] text-base text-white-A700"
                size="txtInterBold16"
              >
                Logo
              </Text>
              <ul className="flex flex-row gap-[107px] sm:hidden items-start justify-between md:ml-[0] ml-[684px] mr-[175px] md:mt-0 my-[34px] w-auto common-row-list">
                <li>
                  <a href="javascript:" className="text-base text-white-A700">
                    <Text size="txtInterRegular16">About</Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:" className="text-base text-white-A700">
                    <Text size="txtInterRegular16">Pricing</Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:" className="text-base text-white-A700">
                    <Text size="txtInterRegular16">Review</Text>
                  </a>
                </li>
              </ul>
            </header>
            <div className="font-poppins h-[1177px] sm:h-[525px] md:h-[785px] relative w-full">
              <Img
                className="absolute bottom-[24%] h-[441px] object-cover right-[0] w-[33%]"
                src="images/img_pngwing1.png"
                alt="pngwingOne"
              />
              <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 gap-[120px] inset-x-[0] items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start mb-[30px] md:ml-[0] ml-[126px] w-[42%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="gap-4 sm:gap-5 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                      <div className="border border-purple-700 border-solid flex flex-1 flex-col gap-4 items-start justify-start p-[30px] sm:px-5 rounded-[10px] w-full">
                        <Text
                          className="text-black-900 text-xl w-auto"
                          size="txtPoppinsBold20"
                        >
                          Interactive Features
                        </Text>
                        <Text
                          className="max-w-[208px] md:max-w-full text-black-900 text-xs"
                          size="txtPoppinsRegular12"
                        >
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col gap-12 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-auto"
                      size="txtInterBold48"
                    >
                      About the Course
                    </Text>
                    <Text
                      className="max-w-[367px] md:max-w-full text-black-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      <>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the 1500s,
                        when an unkno
                      </>
                    </Text>
                  </div>
                  <Button className="bg-gradient  cursor-pointer font-bold leading-[normal] min-w-[237px] py-[15px] rounded-[10px] text-center text-white-A700 text-xl">
                    Explore Now
                  </Button>
                </div>
              </div>
              <div className="absolute flex inset-x-[0] mx-auto p-[62px] md:px-10 sm:px-5 top-[0] w-full">
                <div className="h-[429px] sm:h-[460px] md:h-[785px] ml-auto mr-[51px] mt-[31px] w-4/5 md:w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex md:flex-col flex-row gap-[19px] items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col md:gap-10 gap-[82px] items-start justify-start mb-[58px] w-[51%] md:w-full">
                        <div className="flex flex-col font-inter gap-6 items-start justify-start w-full">
                          <Text
                            className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                            size="txtInterBold48WhiteA700"
                          >
                            Learn how to launch a successful podcast
                          </Text>
                          <Text
                            className="text-base text-white-A700 w-3/4 sm:w-full"
                            size="txtInterRegular16"
                          >
                            <>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting in ustry. Lorem Ipsum has been the
                              industry&#39;s standard dummy text ever since the
                              1500s
                            </>
                          </Text>
                        </div>
                        <Button className="bg-gradient  cursor-pointer font-bold font-poppins leading-[normal] min-w-[237px] py-[22px] rounded-[10px] text-center text-white-A700 text-xl">
                          Sign up Now
                        </Button>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[370px] items-end justify-end md:mt-0 mt-[59px] p-2.5 w-[48%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group2.svg')",
                        }}
                      >
                        <div className="bg-white-A700 flex flex-col h-[76px] md:h-auto items-center justify-center mb-1.5 mt-[266px] px-[7px] py-0.5 rotate-[-15deg] rounded-[5px] shadow-bs w-[77px]">
                          <Img
                            className="h-[54px] md:h-auto object-cover w-[46px]"
                            src="images/img_group.png"
                            alt="group"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[281px] object-cover right-[5%] rounded-[10px] top-[0] w-[43%]"
                    src="images/img_everyoneissmi.png"
                    alt="everyoneissmi"
                  />
                </div>
                <Img
                  className="h-[281px] ml-[undefinedpx] mr-[165px] my-auto object-cover rounded-[10px] w-[35%] z-[1]"
                  src="images/img_groupbusiness.png"
                  alt="groupbusiness"
                />
                <div className="bg-white-A700 flex flex-col h-[81px] md:h-auto items-center justify-center ml-[-29.1px] mt-[183px] px-[3px] py-[7px] rotate-[17deg] rounded-[5px] shadow-bs w-[81px] z-[1]">
                  <Img
                    className="h-[45px] md:h-auto object-cover w-[52px] sm:w-full"
                    src="images/img_vector.png"
                    alt="vector"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="font-poppins sm:h-[1429px] h-[691px] md:h-[931px] mt-[-45.82px] mx-auto w-full z-[1]">
            <div className="absolute md:h-[531px] h-[568px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="absolute md:h-[531px] h-[549px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="absolute h-[531px] inset-[0] justify-center m-auto object-cover"
                  src="images/img_line1.png"
                  alt="lineOne"
                />
                <Img
                  className="absolute h-[531px] inset-[0] justify-center m-auto object-cover"
                  src="images/img_line1.png"
                  alt="lineTwo"
                />
              </div>
              <Img
                className="absolute bottom-[0] h-[531px] inset-x-[0] mx-auto object-cover"
                src="images/img_line1.png"
                alt="lineThree"
              />
              <Text
                className="absolute right-[0] md:text-5xl text-[150px] text-gray-200 top-[20%]"
                size="txtPoppinsBold150"
              >
                Podcast
              </Text>
            </div>
            <div className="absolute bottom-[5%] flex flex-col gap-[54px] inset-x-[0] items-center justify-start mx-auto w-[76%]">
              <div className="flex flex-col gap-6 items-center justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-auto sm:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                    size="txtInterBold32"
                  >
                    Choose your plan
                  </Text>
                  <Text
                    className="max-w-[455px] md:max-w-full text-black-900 text-center text-sm"
                    size="txtPoppinsRegular14"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s{" "}
                    </>
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-row gap-2.5 h-[37px] md:h-auto items-center justify-start pl-1.5 pr-4 py-1.5 rounded-[10px] shadow-bs1 w-auto">
                  <Text
                    className="bg-purple-100_66 justify-center pt-1 px-[9px] rounded-[10px] text-black-900 text-center text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    monthly
                  </Text>
                  <Text
                    className="text-black-900 text-center text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    yearly
                  </Text>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[90px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                {dashboardPlanPropList.map((props, index) => (
                  <React.Fragment key={`DashboardPlan${index}`}>
                    <DashboardPlan
                      className="bg-white-A700 border border-purple-700 border-solid flex flex-col gap-6 items-start justify-start sm:px-5 px-[27px] py-[35px] rounded-[10px] w-auto"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-poppins gap-8 items-center justify-end overflow-auto sm:pl-5 pl-[30px] py-[30px] w-full">
          <div className="flex flex-col gap-8 items-start justify-start mt-[26px] md:px-5 w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
                size="txtInterBold40"
              >
                Review from customers
              </Text>
              <Text
                className="max-w-[399px] md:max-w-full text-black-900 text-xs"
                size="txtPoppinsRegular12"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              {new Array(3).fill({}).map((props, index) => (
                <React.Fragment key={`DashboardRowclose${index}`}>
                  <DashboardRowclose
                    className="bg-white-A700 border border-purple-100_66 border-solid hover:cursor-pointer flex sm:flex-1 flex-col gap-2.5 items-center justify-center md:px-10 px-12 sm:px-5 py-9 rounded-[10px] hover:shadow-bs2 shadow-bs2 w-auto hover:w-full sm:w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
          <Img
            className="h-[15px] w-[171px]"
            src="images/img_frame84.svg"
            alt="frameEightyFour"
          />
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col font-poppins h-[493px] items-center justify-end mt-[43px] pt-[68px] md:px-10 sm:px-5 px-[68px] w-full"
          style={{ backgroundImage: "url('images/img_frame87.png')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[110px] items-center justify-start max-w-[995px] mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-auto md:w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                  size="txtInterBold32"
                >
                  We have what you’re looking for
                </Text>
                <Text
                  className="bg-clip-text bg-gradient  max-w-[596px] md:max-w-full text-center text-transparent text-xs"
                  size="txtPoppinsRegular12IndigoA200"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type a
                  </>
                </Text>
              </div>
              <Button className="bg-gradient  cursor-pointer font-bold leading-[normal] min-w-[237px] py-[15px] rounded-[10px] text-center text-white-A700 text-xl">
                Get Started Now
              </Button>
            </div>
            <div className="border-solid border-t border-white-A700 flex md:flex-col flex-row md:gap-10 gap-48 h-[74px] md:h-auto items-center justify-center max-w-[995px] py-5 w-full">
              <Text
                className="text-white-A700 text-xs w-auto"
                size="txtPoppinsRegular12WhiteA700"
              >
                All Right Reserved @Copyright 2023
              </Text>
              <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-10 gap-16 items-center justify-start w-auto sm:w-full">
                <div className="flex flex-row gap-6 items-start justify-start w-auto">
                  <a
                    href="javascript:"
                    className="text-white-A700 text-xs w-auto"
                  >
                    <Text size="txtPoppinsRegular12WhiteA700">
                      Terms of Service
                    </Text>
                  </a>
                  <a
                    href="javascript:"
                    className="text-white-A700 text-xs w-auto"
                  >
                    <Text size="txtPoppinsRegular12WhiteA700">
                      Privacy Policy
                    </Text>
                  </a>
                  <Text
                    className="text-white-A700 text-xs w-auto"
                    size="txtPoppinsRegular12WhiteA700"
                  >
                    Product
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start w-36">
                  <Img
                    className="h-6 w-6"
                    src="images/img_mdifacebook.svg"
                    alt="mdifacebook"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_uilyoutube.svg"
                    alt="uilyoutube"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_basilinstagramsolid.svg"
                    alt="basilinstagrams"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_uiltwitter.svg"
                    alt="uiltwitter"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
