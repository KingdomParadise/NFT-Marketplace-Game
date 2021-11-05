import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import DetailText from './DetailText'
import trust from '../../../assets/trust.png'
import metaMask from '../../../assets/metamask.png'

export function SetupWalletModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="mt-6 mb-14">
        <button type="button" onClick={openModal} className="text-white text-opacity-50 underline">How to setup wallet and buy</button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-sm p-8 my-8 overflow-hidden text-left text-white align-middle transition-all transform bg-pink-dark rounded-2xl modal-wrapper">
                <Dialog.Title
                  as="h3"
                  className="text-3xl text-shadow mb-10"
                >
                  How to setup a wallet
                </Dialog.Title>
                <div className="mx-5">
                  <p className="text-md mb-5">1) Download Metamask or Trust Wallet</p>
                  <div className="grid grid-cols-2 gap-4">
                    <button type="button" className="w-4/5"><img src={trust} /></button>
                    <button type="button" className="w-4/5 justify-self-end"><img src={metaMask} /></button>
                  </div>

                  <p className="text-md mt-9 mb-5">2) Buy BNB in the app or Binance</p>
                  <div className="w-4/5 mx-auto">
                    <button type="button" className="w-full custom-box-shadow rounded py-2 px-4 mb-5 bg-pink-dark">Get BNB on Metamask</button>
                    <button type="button" className="w-full custom-box-shadow rounded py-2 px-4 bg-pink-dark">Get BNB on Trust Wallet</button>
                  </div>

                  <p className="text-md mt-9 mb-4">3) Now you're ready to buy $VPR!</p>
                  <div className="w-4/5 mx-auto">
                    <button type="button" className="w-full custom-box-shadow rounded py-2 px-4 bg-purple-dark">Buy $VPR on Pancakeswap</button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export function TokenomicsModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div>
        <button type="button" onClick={openModal} className="text-white underline text-2xl">Vaporblitz Tokenomics</button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-sm p-6 my-8 overflow-hidden text-left text-white text-center align-middle transition-all transform bg-pink-dark rounded-2xl modal-wrapper">
                <Dialog.Title
                  as="h3"
                  className="text-2xl uppercase text-shadow mb-10"
                >
                  TOKENOMICS
                </Dialog.Title>
                <div className="mt-2">
                  <DetailText text="Total Tokens: 500,000,000" />
                  <DetailText text="Team: 5% (15% LOCKED)" />
                  <DetailText text1="Token Time Locked Contract:" text2="0x003992931901340931" multi="true" />
                  <DetailText text1="Token Liquidity Locked:" text2="dxlocker liquidity locked" multi="true" underline="true" />
                  <DetailText text="LIQUIDITY LOCKED ON DXLOCKER" color="green" />
                  <p className="text-2xl uppercase text-shadow mt-12 mb-2">Funds use:</p>
                  <DetailText text="50% Marketing" />
                  <DetailText text="50% Game Development and Updates" />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}