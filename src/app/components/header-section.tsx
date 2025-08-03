


import Image from "next/image";

const HeaderSection = ({
    title,
    subTitle,
}:{
    title : string;
    subTitle : string;
}) => {
  return <header className="relative h-70 text-white overflow-hidden">
<div className="absolute inset-0">
    <Image
      src="/images/header-bg.jpg"
      alt="Header Background"
      fill
      className="object-cover"
    />
  </div>
  <div className="relative  flex flex-col items-center justify-center h-95 bg-black text-center pt-14 ">
    <h1 className="text-5xl font-bold leading-tight capitalize">{title}</h1>
    <p className="text-xl text-gray-300  ">{subTitle}</p>
</div>
  </header>;
};

export default HeaderSection;
