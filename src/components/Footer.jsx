import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#0B1120] to-[#062F36] text-white  ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
       
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold bg-linear-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
             SunCart
            </h2>

            <p className="mt-3 text-sm  ">
              Your one-stop summer essentials store.
              Discover trendy sunglasses, beachwear,
              skincare products, and seasonal accessories
              at great prices.
            </p>
          </div>

        
          <div>
            <h3 className="footer-title">Quick Links</h3>

            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-orange-400">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-orange-400"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/my-profile"
                  className="hover:text-orange-400"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="footer-title">Contact</h3>

            <div className="space-y-2 text-sm">
              <p>Email: support@suncart.com</p>
              <p>Phone: +880 1234-567890</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>

       
          <div>
            <h3 className="footer-title">Follow Us</h3>

            <div className="flex gap-4 mt-3 text-xl">
              <a
                href="#"
                className="hover:text-blue-500 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="hover:text-sky-400"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="hover:text-red-500 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

         <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            &copy;2026 SunCart. All rights
            reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="hover:text-orange-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-orange-400"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}