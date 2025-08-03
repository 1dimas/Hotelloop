import Image from "next/image";
import HeaderSection from "../components/header-section";
import {IoEyeOffOutline,IoLocateOutline} from "react-icons/io5";

const page = () => {
  return (
    <div>
      <HeaderSection title="About Us" subTitle="Lorem ipsum lodor sit amet" />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Image src="/about-image.jpg" alt="about" width={650} height={579} />
          <div>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h1>
            <p className="text-gray-700 py-5">
              Welcome to our hotel, where comfort meets luxury. Our mission is
              to provide an unforgettable experience for every guest. From the
              moment you step into our lobby, you will be greeted with warm
              hospitality and exceptional service.
              <ul className="list-items space-6 pt-8 ">
                <li className="flex gap-5">
                    <div className="flex-none mt-1">
                        <IoEyeOffOutline className="size-7" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-1">Mission :</h4>
                        <p className="text-gray-600">
                            Our vision is to be the leading hotel in the region, known for our exceptional service and luxurious accommodations.
                        </p>
                    </div>
                </li>
                 <li className="flex gap-5">
                    <div className="flex-none mt-1">
                        <IoEyeOffOutline className="size-7" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-1">Vission :</h4>
                        <p className="text-gray-600">
                            Our mission is to provide a unique and memorable experience for our guests, ensuring their comfort and satisfaction at every step.
                        </p>
                    </div>
                </li>
                </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
