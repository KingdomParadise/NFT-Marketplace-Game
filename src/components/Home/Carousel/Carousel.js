import Slider from "react-slick";
import firstCarousel from '../../../assets/carousel1.png';
import firCeo from '../../../assets/ceo-1.png';
import secCeo from '../../../assets/ceo-2.png';
import leadArt from '../../../assets/lead-art.png';
import leadGame from '../../../assets/lead-game.png';

function NextArrow(props) {
  const { className, style, onClick, type } = props;
  return (
    <>
    {type ? (
      <div
        className={className}
        style={{ ...style, right: "-10px" }}
        onClick={onClick}
      />        
    ) : (
      <div
        className={className}
        style={{ ...style, right: "5px" }}
        onClick={onClick}
      />        
    )}
  </>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

export function FullCarousel() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="-mb-2">
      <Slider {...settings}>
        <div>
          <img src={firstCarousel} alt="" className="w-full" />
        </div>
        <div>
          <img src={firstCarousel} alt="" className="w-full" />
        </div>
        <div>
          <img src={firstCarousel} alt="" className="w-full" />
        </div>
      </Slider>
    </div>
  );
}

function ItemContent(props) {
  return(
    <div className="px-6 py-3">
      <div className="custom-box-shadow pb-2">
        <img className="px-4 pt-3 pb-1 md:pt-5 md:pb-3" src={props.src} alt="" />
        <p className="text-white">{props.name}</p>
        <p className="text-white text-opacity-50">{props.role}</p>
      </div>
    </div>
  );
}

export function ItemCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
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
    ],
    nextArrow: <NextArrow type="true" />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="pl-2 pr-4 pt-4 pb-8">
      <Slider {...settings}>
        <ItemContent src={firCeo} name="Tim / ? nooo" role="CEO" />
        <ItemContent src={secCeo} name="Jayce" role="CEO" />
        <ItemContent src={leadArt} name="Jurian" role="Lead Game Dev" />
        <ItemContent src={leadGame} name="William" role="Lead Art Director" />
        <ItemContent src={leadArt} name="Eric" role="Lead Blockchain Dev" />
      </Slider>
    </div>
  );
}

const roadMap = [
  { 
    date: 'DEC 2020', 
    detail: [
      {name: 'Game Release'},
      {name: 'Marketing'},
      {name: 'Giveaways'},
      {name: 'Lootboxes'},
    ]
  },
  { date: 'Q1 2022',
    detail: [
      {name: 'Game Release'},
      {name: 'Marketing'},
      {name: 'Giveaways'},
      {name: 'Lootboxes'},
    ]
  },
  { date: 'Q2 2022',
    detail: [
      {name: 'PVE BETA'},
      {name: 'Team Blitz'},
      {name: 'Battle Pass'},
      {name: 'Rewards Pool'},
    ] 
  },
  { date: 'Q3 2022',
    detail: [
      {name: 'SOL / ETH Wagers'},
      {name: 'Level Creator'},
      {name: 'Mini Games'},
      {name: 'Mobile Release'},
    ]
  },
  { date: 'Q4 2022',
    detail: [
      {name: 'Game Release'},
      {name: 'Marketing'},
      {name: 'Giveaways'},
      {name: 'Lootboxes'},
    ]
  },
]

function RoadMapItem(props) {
  return(
    <div className="text-center text-white">              
      <div className="w-10/12 mx-auto mt-2 bg-pink-800 rounded custom-box-shadow p-1 md:p-2 mb-3 md:text-lg">{props.date}</div>
      {props.detail.map((item) => (
        <p key={item.name} className="text-sm md:text-base">{item.name}</p>
      ))}
    </div>
  );
}

export function RoadMapCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="pb-4">
      <Slider {...settings}>
        {roadMap.map((item) => (
          <RoadMapItem key={item.date} date={item.date} detail={item.detail} />
        ))}
      </Slider>
    </div>
  );
}