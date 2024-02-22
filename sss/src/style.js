const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading1: "leading-[38.8px] md:leading-[78.8px] text-[30px] md:text-[68px]",
    paragraph: "font-medium font-roboto md:leading-[50.8px] leading-[35.8px] pt-4 text-[24px]",
    heading2: "leading-[48.8px] md:leading-[58.8px] text-[40px] md:text-[48px]",
    heading3: "leading-[40.8px] md:leading-[48.8px] text-[38px] md:text-[42px]",
    button: "py-4 my-12 md:my-[20px] px-[30px] bg-[#A020F0] font-roboto font-medium text-[18px] text-[#FDFDFD] outline-none rounded-[10px]",
    list: "font-roboto font-normal cursor-pointer text-[16px]",
    
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-center",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col ${styles.paddingY}`,
  
    sectionImgReverse: `flex flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-[1] flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 justify-center flex-col`,
  };
  
  export default styles;