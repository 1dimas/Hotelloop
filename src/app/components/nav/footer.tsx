import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900">
        <div className="max-w-screen-xl mx-auto px-4 w-full py-10 md:py-16">
          <div className="grid md:grid-cols-3 gap-7 ">
            <div>
              <Link href="/" className="mb-10 block">
                <Image
                  src="/logo.png"
                  width={128}
                  height={49}
                  alt="logo"
                  priority
                />
              </Link>
              <p className="text-gray-400 mt-4">
                Hotelloop is a hotel booking platform that connects travelers
                with hotels worldwide.
              </p>
            </div>
            <div>
              <div className="flex gap-20">
                <div className="flex-1 md:flex-none">
                  <h4 className="mb-8 text-xl font-bold text-blue-200">Link</h4>
                  <ul className="list-item space-y-5 text-gray-500">
                    <li>
                      <Link href="#">Legal</Link>
                    </li>
                    <li>
                      <Link href="#">Term & Condition</Link>
                    </li>
                    <li>
                      <Link href="#">Payment Method</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy & Policy</Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div
          className="cborder-t border-gray-500 py-8 text-center
        text-base text-gray-500"
        >
          &copy; copyright 2025 Hotelloop. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
