import React from "react";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: { label: string; url: string }[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: [
      { label: "About Us", url: "/aboutus" },
      { label: "Blog", url: "/blog" },
      { label: "Contact us", url: "/contactus" },
      { label: "Testimonials", url: "/testimonials" },
    ],
  },
  {
    id: 2,
    section: "Support",
    link: [
      { label: "Terms of Service", url: "/terms" },
      { label: "Legal", url: "/legal" },
      { label: "Privacy Policy", url: "/privacy" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-bgpurple -mt-64" id="first-section">
      <div className="mx-auto max-w-2xl pt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="col-span-4">
            <img src={"/assets/logo/ilc-small.png"} alt="logo" className="pb-4" />
            <h3 className="text-white text-lg font-medium leading-9 mb-4 lg:mb-20">
              Our commitment to innovation, technology, and accessibility ensures that we remain at the forefront of the legal landscape, creating a brighter future for all stakeholders.
            </h3>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/ilc_2024/">
                <img src={"/assets/footer/insta.svg"} alt="instagram" className="footer-icons" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61566850594571&mibextid=ZbWKwL">
                <img src={"/assets/footer/dribble.svg"} alt="dribble" className="footer-icons" />
              </Link>
              <Link href="https://x.com/ILCindia_2024">
                <img src={"/assets/footer/twitter.svg"} alt="twitter" className="footer-icons" />
              </Link>
              <Link href="https://www.youtube.com/@ILC_2024">
                <img src={"/assets/footer/youtube.svg"} alt="youtube" className="footer-icons" />
              </Link>
            </div>
          </div>

          {/* COLUMNS-2/3 */}
          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-semibold mb-9">{product.section}</p>
              <ul>
                {product.link.map((link, index) => (
                  <li key={index} className="mb-5">
                    <Link href={link.url} className="text-offwhite text-sm font-normal mb-6 space-links">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* COLUMN-4 */}
          <div className="col-span-4">
            <h3 className="text-white text-xl font-semibold mb-6">Contact Us</h3>
            <p className="text-offwhite text-sm mb-4">
              <strong>Head Office:</strong> Sector 56, Gurgaon, Haryana
            </p>
            <p className="text-offwhite text-sm mb-4">
              <strong>Phone:</strong> +91-7303031659
            </p>
            <p className="text-offwhite text-sm mb-4">
              <strong>Email:</strong> info@gmail.com
            </p>
            <p className="text-offwhite text-sm mb-4">
              <strong>Regional Office:</strong> 1889/1, Opp Ana Sagar Lake, Chupati GauravPath, Ajmer, 305001
            </p>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}
      <div className="pb-24 px-4">
        <h3 className="text-center text-offwhite">
          @2025 - All Rights Reserved by <Link href="#" target="_blank"> ILC Limited</Link>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
