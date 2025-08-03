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
                  <h4 className="mb-8 text-xl font-bold text-white">Link</h4>
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
            <div>
              <h4 className="mb-8 text-xl font-semibold text-white ">
                Newsletter
              </h4>
              <p className="text-gray-600">
                Subscribe to our newsletter to get the latest updates and offers
                directly in your inbox.
              </p>
              <form action="" className="mt-5">
                <div className="mb-5">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-b-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 text-white"
                  />
                </div>
                <button className="p-3 font-bold bg-black text-white w-full
                rounded-sm hover:bg-gray-800 border-black ">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div
          className="border-t border-gray-500 py-8 text-center
        text-base text-gray-500"
        >
          &copy; copyright 2025 Hotelloop. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
