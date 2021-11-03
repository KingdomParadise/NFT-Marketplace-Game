import Slider from "react-slick";
import firstCarousel from '../../../assets/carousel1.png';
import firCeo from '../../../assets/ceo-1.png';
import secCeo from '../../../assets/ceo-2.png';
import leadArt from '../../../assets/lead-art.png';
import leadGame from '../../../assets/lead-game.png';

export function FullCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="-mb-2">
      <Slider {...settings}>
        <div>
          <img src={firstCarousel} alt="" />
        </div>
        <div>
          <img src={firstCarousel} alt="" />
        </div>
        <div>
          <img src={firstCarousel} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export function ItemCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    centerPadding: '80px',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <div className="pl-2 pr-4 pt-4 pb-8">
      <Slider {...settings}>
        <div className="px-6 py-3">
          <div className="custom-box-shadow pb-2">
            <img className="px-4 pt-3 pb-1 md:pt-5 md:pb-3" src={firCeo} alt="" />
            <p className="text-white">Tim / ? nooo</p>
            <p className="text-white text-opacity-50">CEO</p>
          </div>
        </div>
        <div className="px-6 py-3">
          <div className="custom-box-shadow pb-2">
            <img className="px-4 pt-3 pb-1 md:pt-5 md:pb-3" src={secCeo} alt="" />
            <p className="text-white">Jayce</p>
            <p className="text-white text-opacity-50">CEO</p>
          </div>
        </div>
        <div className="px-6 py-3">
          <div className="custom-box-shadow pb-2">
            <img className="px-4 pt-3 pb-1 md:pt-5 md:pb-3" src={leadArt} alt="" />
            <p className="text-white">Jurian</p>
            <p className="text-white text-opacity-50">Lead Game Dev</p>
          </div>
        </div>
        <div className="px-6 py-3">
          <div className="custom-box-shadow pb-2">
            <img className="px-4 pt-3 pb-1 md:pt-5 md:pb-3" src={leadGame} alt="" />
            <p className="text-white">William</p>
            <p className="text-white text-opacity-50">Lead Art Director</p>
          </div>
        </div>
        <div className="px-6 py-3">
          <div className="custom-box-shadow pb-2">
            <img className="px-4 pt-3 pb-1 md:pt-5 md:pb-3" src={leadArt} alt="" />
            <p className="text-white">Eric</p>
            <p className="text-white text-opacity-50">Lead Blockchain Dev</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}