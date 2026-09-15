import logo from "../assets/logo-text.png"

function Footer() {
  return (
    <footer className="mt-16">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
             <img src={logo}  alt="" />
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500">
              curated tools, technologies and resources for developers building modern software. 
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-6">

              <a className="flex h-10 w-10 items-center justify-center font-bold cursor-pointer text-gray-500">
                GitHub 
              </a>

              <a className="flex h-10 w-10 items-center justify-center font-bold cursor-pointer text-gray-500">
                Twitter  
              </a>

              <a className="flex h-10 w-10 items-center justify-center font-bold cursor-pointer text-gray-500">
                LinkedIn  
              </a>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold uppercase ">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a className="text-gray-400">
                  Home
                </a>
              </li>

              <li>
                <a className="text-gray-400">
                  Technologies
                </a>
              </li>
               <li>
                <a className="text-gray-400">
                  Projects 
                </a>
              </li>

              
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase ">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a className="text-gray-400">
                  About
                </a>
              </li>

              <li>
                <a className="text-gray-400">
                  Contact 
                </a>
              </li>
               <li>
                <a className="text-gray-400">
                  Careers
                </a>
              </li>

              
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase ">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a className="text-gray-400">
                  Privacy Policy 
                </a>
              </li>

              <li>
                <a className="text-gray-400">
                  Terms of Services
                </a>
              </li>

              
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <hr className=" text-gray-500" />
      <div className="">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a className="text-gray-400">
              Privacy
            </a>

            <a className="text-gray-400">
              Terms
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
