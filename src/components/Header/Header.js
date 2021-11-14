import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../assets/logo.png";

const navigation = [
  {
    name: "Marketplace",
    href: "marketplace",
    current: false,
  },
  {
    name: "Whitepaper",
    href: "https://vaporblitz.gitbook.io/whitepaper/",
    current: false,
  },
  { name: "PVP", href: "#pvp", current: false },
  { name: "P2E", href: "#pve", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="relative grid grid-cols-12 gap-4 items-center bg-black-700 text-white">
            <div className="hidden md:block col-span-2">
              <a href="/"><img className="w-20 ml-2 pt-2 pb-1" src={logo} /></a>
            </div>
            <div className="col-span-8 md:col-span-5">
              <div className="flex justify-between md:justify-around text-sm md:text-base px-2 py-4 ">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? "text-white" : "hover:text-white",
                      "px-3 py-2 rounded-md text-sm header-link"
                    )}
                    {...(item.href.startsWith("https://")
                      ? { target: "_blank", rel: "noreffer" }
                      : {})}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:block col-span-5">
              <div className="flex justify-center gap-6">
                <button
                  type="button"
                  className="border border-white rounded-xl pl-4 pr-4"
                  onClick={() =>
                    window.open(
                      "https://pancakeswap.finance/swap?outputCurrency=0x73f5a4808456f4927ee13cbe76b2b726136ce962",
                      "_blank"
                    )
                  }
                >
                  Buy on Pancakeswap
                </button>
                <button
                  type="button"
                  className="bg-pink-300 rounded-xl pl-4 pr-4"
                >
                  Connect Wallet
                </button>
              </div>
            </div>
            <div className="absolute inset-y-0 right-1 flex items-center md:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open Button Menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="grid justify-center gap-2 bg-black-700 text-white py-3">
              <button
                type="button"
                className="border border-white rounded-xl pl-4 pr-4"
                onClick={() =>
                  window.open(
                    "https://pancakeswap.finance/swap?outputCurrency=0x73f5a4808456f4927ee13cbe76b2b726136ce962",
                    "_blank"
                  )
                }
              >
                Buy on Pancakeswap
              </button>
              <button
                type="button"
                className="bg-pink-300 rounded-xl pl-4 pr-4"
              >
                Connect Wallet
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
