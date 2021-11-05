import React, {useState, Fragment} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { Popover, Transition } from '@headlessui/react'
import clipCopy from '../../../assets/clip-copy.png'

export default function CopyClipBoard() {
  const [copied, setCopied] = useState(false);

  return(
    <div>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                w-10/12 md:w-4/12 lg:w-3/12 mx-auto hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <CopyToClipboard text="0x329847350808942804042SDx"
                onCopy={() => setCopied(true)}>
                <div type="button" className="grid grid-cols-12 items-center mx-auto border border-white rounded-md p-1">
                  <p className="col-span-11 text-white">0x329847350808942804042SDx</p>
                  <img className="w-6 hover:opacity-70" src={clipCopy} />
                </div>
              </CopyToClipboard>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              {copied ? <Popover.Panel className="absolute z-10 w-screen max-w-min transform -translate-x-1/2 left-1/2 top-10"><div className="px-4 text-white rounded-lg custom-box-shadow bg-pink-dark">Copied</div></Popover.Panel> : null}
            </Transition>
          </>
        )}
      </Popover>      
    </div>
  );
}

