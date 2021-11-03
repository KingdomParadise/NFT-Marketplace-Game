import './Home.css';
import {FullCarousel, ItemCarousel} from './Carousel/Carousel';
import Box from './Box/Box';
import ItemList from './ItemList/ItemList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerLogo from '../../assets/banner-logo.png';
import dropdownArrow from '../../assets/dropdown-arrow.png';

import discord from '../../assets/discord.png'; 
import telegram from '../../assets/telegram.png';
import acs1 from '../../assets/accessory1.png';
import acs2 from '../../assets/accessory2.png';
import acs3 from '../../assets/accessory3.png';
import acs4 from '../../assets/accessory4.png';
import wpSkin1 from '../../assets/wp-skin1.svg';
import wpSkin2 from '../../assets/wp-skin2.svg';
import wpSkin3 from '../../assets/wp-skin3.svg';
import blueBox from '../../assets/blue-box.png';
import purpleBox from '../../assets/purple-box.png';

import iceGundle from '../../assets/ice-gundle.png';
import flashBang from '../../assets/flashbang.png';
import grenade from '../../assets/grenade.png';
import emp from '../../assets/emp.png';
import vaporcrate from '../../assets/vaporcrate.png';
import signalSlicer from '../../assets/signal-slicer.png';
import robsquid from '../../assets/robsquid.png';
import deadDice from '../../assets/dead-dice.png';
import blueBoxLg from '../../assets/blue-box-lg.png';
import yellowBoxLg from '../../assets/yellow-box-lg.png';
import purpleBoxLg from '../../assets/purple-box-lg.png';
import pinkBlend from '../../assets/pink-blend.png'
import walletBlue from '../../assets/wallblue.png';
import baseModel from '../../assets/base-model.png';
import roadBar from '../../assets/road-bar.png';
import roadTri from '../../assets/road-tri.png';
import clipCopy from '../../assets/clip-copy.png';

export default function Home() {
    return (
      <>
        <div className="grid justify-items-center banner-wrapper pb-8">
          <div className="flex flex-row-reverse w-11/12 md:w-9/12 justify-items-end gap-2 my-4">
            <p className="flex items-center text-center w-8 h-8 bg-purple-light rounded-3xl"><img className="p-1.5" src={telegram} /></p>
            <p className="flex items-center text-center w-8 h-8 bg-pink-light rounded-3xl"><img className="p-1.5" src={discord} /></p>
          </div>          
          <img className="w-4/12" src={bannerLogo} />
          <a className="bg-pink-light w-32 p-2 rounded-lg text-white mb-3 text-shadow custom-box-shadow" href="#">Play For Free</a>
          <a className="bg-purple-light w-32 p-2 rounded-lg text-white text-shadow custom-box-shadow" href="#">Marketplace</a>
          <a className="w-10 pt-10" href="#"><img src={dropdownArrow} /></a>
        </div>

        <Box title="What is Vaporblitz?" className="text-center bg-pink-dark">
          <p className="text-lg text-white text-opacity-50 w-5/12 mx-auto py-4">
            Vaporblitz is a PVP & P2E game where you fight against other players online for BNB or VPR. <br/>
            All in-game items are NFTS.
          </p>
          <p className="text-lg text-white text-opacity-50 w-5/12 mx-auto pb-3">
          Our goal is for Vaporblitz to be fun whilst also being able to make money in the process.
          </p>
        </Box>

        <Box title="Collect NFT Items" sub="All Usable In-Game!" className="bg-purple-dark pb-5">
          <ItemList title="NFT WEAPON SKINS" backSrc={purpleBox} innerSrc1={wpSkin1} innerSrc2={wpSkin2} innerSrc3={wpSkin3} innerSrc4={wpSkin3} />
          <ItemList title="NFT ACCESSORIES" backSrc={blueBox} innerSrc1={acs1} innerSrc2={acs2} innerSrc3={acs3} innerSrc4={acs4} />
        </Box>

        <Box title="Extensive PVP System" sub="Different weapons, equipment and maps!" className="bg-pink-dark">
          <div className="w-10/12 mx-auto mt-10">
            <div className="grid md:grid-cols-3 gap-5 md:gap-10">
              <div className="w-3/5 md:w-full mx-auto">
                <div className="flex justify-center items-center relative">
                  <img src={blueBoxLg} className="w-full" />
                  <img src={iceGundle} className="absolute h-3/5 mb-10" />
                  <p className="absolute bottom-8 md:bottom-6 lg:bottom-12 text-xl md:text-2xl text-white">Fun Weapons</p>
                </div>    
                <p className="md:w-3/5 mx-auto mt-2 text-white text-opacity-50">Over 10 Weapons with different abilities</p>
              </div>

              <div className="w-3/5 md:w-full mx-auto">              
                <div className="flex justify-center items-center relative">
                  <img src={yellowBoxLg} className="w-full" />
                  <div className="flex items-center justify-center absolute h-full">
                    <img src={flashBang} className="h-3/6 mb-6" />
                    <img src={grenade} className="h-3/6 mb-6" />
                    <img src={emp} className="h-3/6 mb-6" />
                    </div>
                  <p className="absolute bottom-8 md:bottom-6 lg:bottom-12 text-xl md:text-2xl text-white">Equipment</p>
                </div>
                <p className="md:w-3/5 mx-auto mt-2 text-white text-opacity-50">Different Equipment which helps in combat</p>              
              </div>

              <div className="w-3/5 md:w-full mx-auto">
                <div className="flex justify-center items-center relative">
                  <img src={purpleBoxLg} className="w-full" />
                  <img src={vaporcrate} className="absolute h-3/5 mb-10" />
                  <p className="absolute bottom-8 md:bottom-6 lg:bottom-12 text-xl md:text-2xl text-white">Airdrops</p>
                </div>
                <p className="md:w-3/5 mx-auto mt-2 text-white text-opacity-50">Airdrops come in with different rare weapons</p>
              </div>
            </div>
          </div>
          <div>
            <img className="h-10 w-full" src={pinkBlend} />
          </div>
        </Box>

        <FullCarousel />

        <Box title="Fight Different Bosses for Crypto" className="bg-purple-dark md:bg-pink-dark">            
          <div className="grid md:flex md:justify-around">
            <div className="inner-box">
              <img className="p-6 md:p-4 mx-auto" src={signalSlicer} />
              <div className="flex items-center text-center h-24 md:h-40 mb-5 md:mb-0 bg-purple-dark">
                <p className="text-white text-opacity-50 text-xl w-3/5 mx-auto"><span className="text-red">Signal Slicer</span> launches deadly signals at the player and is able to freeze them.</p>
              </div>
            </div>
            <div className="inner-box bg-pink-dark">
              <img className="pt-6 md:p-4 mx-auto" src={robsquid} />
              <div className="flex items-center text-center mx-auto h-24 md:h-40 mb-5 md:mb-0 bg-pink-dark md:bg-purple-dark">
                <p className="text-white text-opacity-50 text-xl w-3/5 mx-auto"><span className="text-yellow">Robosquid</span> launches fruit based attacks, and summons fruit based enemies.</p>
              </div>
            </div>
            <div className="inner-box">
              <img className="pt-6 pb-2 md:p-4 mx-auto" src={deadDice} />
              <div className="flex items-center text-center mx-auto h-24 md:h-40 mb-5 md:mb-0 bg-purple-dark">
                <p className="text-white text-opacity-50 text-xl w-3/5 mx-auto"><span className="text-yellow-dark">Dead Dice</span> launches multiple attacks which are all based on his slot machine.</p>
              </div>              
            </div>            
          </div>
        </Box>

        <Box title="Customise your Character with NFT Items" className="space-dress">
          <img className="h-72 mx-auto mt-40" src={baseModel} />
        </Box>

        <Box title="Own and Customise an NFT Home" sub="Buy a property, customise it and earn daily VPR from it." className="px-4 bg-pink-dark">
          <div className="md:w-4/6 mx-auto">
            <img className="py-14" src={walletBlue} />
          </div>
        </Box>

        <Box title="Roadmap" sub="Our plans for the future" className="bg-purple-dark">
          <img className="h-3 w-full mt-6 px-6" src={roadBar} />
          <div className="grid grid-cols-3 gap-10 pb-3">
            <div className="text-center text-white">
              <img className="relative z-10 mx-auto w-6 road-tri" src={roadTri} />
              <div className="w-10/12 mx-auto mt-2 bg-purple-deep rounded custom-box-shadow text-xl p-2 mb-3">DEC 2020</div>
              <p>
                Game Release <br/>
                Marketing <br/>
                Giveaways <br/>
                Lootboxes
              </p>
            </div>

            <div className="text-center text-white">
              <img className="relative z-10 mx-auto w-6 road-tri" src={roadTri} />
              <div className="w-10/12 mx-auto mt-2 bg-purple-deep rounded custom-box-shadow text-xl p-2 mb-3">Q1 2022</div>
              <p>
                PVE BETA <br/>
                Team Blitz <br/>
                Battle Pass <br/>
                Rewards Pool
              </p>
            </div>

            <div className="text-center text-white">
              <img className="relative z-10 mx-auto w-6 road-tri" src={roadTri} />
              <div className="w-10/12 mx-auto mt-2 bg-purple-deep rounded custom-box-shadow text-xl p-2 mb-3">Q2 2022</div>
              <p>
                SOL / ETH Wagers <br/>
                Level Creator <br/>
                Mini Games <br/>
                Mobile Release
              </p>
            </div>
          </div>
        </Box>

        <Box title="Vaporblitz Team" sub="The projects core team" className="bg-pink-dark">
          <ItemCarousel />
        </Box>

        <Box title="Buy $VPR" sub="Buy the games main token on pancakeswap" className="text-center bg-purple-dark pb-8">
          <a href="#" className="flex justify-center w-10/12 md:w-4/12 lg:w-3/12 mx-auto text-white custom-box-shadow rounded-md bg-pink-dark py-1 mt-4">Buy on Pancakeswap</a>
          <p className="text-white py-4">Or</p>
          <div className="grid grid-cols-12 w-10/12 md:w-4/12 lg:w-3/12 items-center mx-auto border border-white rounded-md p-1 mb-6">
            <p className="col-span-11 text-white">0x329847350808942804042SDx</p>
            <img className="w-6" src={clipCopy} />
          </div>
          <p className="mt-6 mb-14"><a className="text-white text-opacity-50 underline" href="#">How to setup wallet and buy</a></p>
          <p><a className="text-white underline text-2xl" href="#">Vaporblitz Tokenomics</a></p>
        </Box>

        <div className="h-24 bg-black"></div>
      </>
    )
}