"use client"

import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { Line } from 'rc-progress';
import { show, hide } from "../../store/slices/sidebarSlice"

let data = [
    {
        name1: "Davina",
        age: 23,
        location: "Abuja",
        percent: "85% Match",
        addressStatus: "Verified Address",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium. Lorem ipsum dolor sit amet, consectetur",
        avatar: "/card1-avatar.svg",
        headImg: "/card1-head.svg",
        heart: "/heart.svg",
        color: '#EF2424'
    },
    {
        name1: "Emily",
        age: 31,
        location: "Lagos",
        percent: "80% Match",
        addressStatus: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium. Lorem ipsum dolor sit amet, consectetur",
        avatar: "/card2-avatar.svg",
        headImg: "/card2-head.svg",
        heart: "/filled-heart.svg",
        color: '#EF2424'
    },
    {
        name1: "John",
        age: 28,
        location: "Delta",
        percent: "72% Match",
        addressStatus: "Verified Address",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium. Lorem ipsum dolor sit amet, consectetur",
        avatar: "/card3-avatar.svg",
        headImg: "/card3-head.svg",
        heart: "/heart.svg",
        color: '#EF2424'
    },
    {
        name1: "Mads",
        age: 26,
        location: "",
        percent: "77% Match",
        addressStatus: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium. Lorem ipsum dolor sit amet, consectetur",
        avatar: "/card4-avatar.svg",
        headImg: "/card4-head.svg",
        heart: "/heart.svg",
        color: '#EF2424'
    },
    {
        name1: "Love",
        age: 26,
        location: "Lagos",
        percent: "80% Match",
        addressStatus: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium. Lorem ipsum dolor sit amet, consectetur",
        avatar: "/card2-avatar.svg",
        headImg: "/card2-head.svg",
        heart: "/heart.svg",
        color: "#00A389"
    },
    {
        name1: "Karen",
        age: 23,
        location: "Abuja",
        percent: "85% Match",
        addressStatus: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium. Lorem ipsum dolor sit amet, consectetur",
        avatar: "/card6-avatar.svg",
        headImg: "/card1-head.svg",
        heart: "/heart.svg",
        color: "#00A389"
    },
    {
        name1: "Sharon",
        age: 24,
        location: "lagos",
        percent: "80% Match",
        addressStatus: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium",
        avatar: "/card7-avatar.svg",
        headImg: "/card4-head.svg",
        heart: "/heart.svg",
        color: '#EF2424'
    },
    {
        name1: "kelvin",
        age: 30,
        location: "PH",
        percent: "70% Match",
        addressStatus: "Verified Address",
        description: "No bio available",
        avatar: "/card1-avatar.svg",
        headImg: "/card1-head.svg",
        heart: "/heart.svg",
        color: '#EF2424'
    },
    {
        name1: "love",
        age: 26,
        location: "",
        percent: "80% Match",
        addressStatus: "Verified Address",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium",
        avatar: "/card2-avatar.svg",
        headImg: "/card2-head.svg",
        heart: "/heart.svg",
        color: '#EF2424'
    },
    {
        name1: "Lily",
        age: 25,
        location: "Lagos",
        percent: "89% Match",
        addressStatus: "Verified Address",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium",
        avatar: "/card10-avatar.svg",
        headImg: "/card10-head.svg",
        heart: "/heart.svg",
        color: '#EF2424'
    },
    {
        name1: "Davon",
        age: 34,
        location: "Lagos",
        percent: "80% Match",
        addressStatus: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium",
        avatar: "/card11-avatar.svg",
        headImg: "/card11-head.svg",
        heart: "/heart.svg",
        color: '#EF2424'
    },
    {
        name1: "Vivian",
        age: 23,
        location: "",
        percent: "81% Match",
        addressStatus: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium",
        avatar: "/card12-avatar.svg",
        headImg: "/card12-head.svg",
        heart: "/heart.svg",
        color: '#EF2424'
    },
    {
        name1: "Davina",
        age: 21,
        location: "Ibadan",
        percent: "80% Match",
        addressStatus: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium",
        avatar: "/card3-avatar.svg",
        headImg: "/card13-head.svg",
        heart: "/heart.svg",
        color: '#EF2424'
    },
    {
        name1: "Jack",
        age: 30,
        location: "Lagos",
        percent: "87% Match",
        addressStatus: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec. Integer pretium orci nec nulla pellentesque pretium",
        avatar: "/card4-avatar.svg",
        headImg: "/card14-head.svg",
        heart: "/heart.svg",
        color: '#EF2424'
    },
    {
        name1: "Dave",
        age: 26,
        location: "Lagos",
        percent: "80% Match",
        addressStatus: "",
        description: "No bio available",
        avatar: "/card14-avatar.svg",
        headImg: "/card14-head.svg",
        heart: "/heart.svg",
        color: '#EF2424'
    }
    
]

export default function Dashboard() {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector((state) => state.sidebar.status);

  const handleOnChange = () => {}

  const handleShowSidebar = () => {
    if (sidebarStatus == true) {
        dispatch(hide());
    } else {
        dispatch(show())
    }
  }

  return (
    <div className="my-6 w-full p-4">
        <div className="flex gap-4">
            <div className="vsm:absolute lg:relative" onClick={handleShowSidebar}>
                <Image
                    src="/bar.svg"
                    alt="Profile"
                    width={20}
                    height={20}
                    className="object-cover"
                />
            </div>
            {/* card box */}
            <div className="md:ml-4 w-full">
                {/* card head */}
                <div className="w-[60vw] flex vsm:justify-center md:justify-start">
                  <div className="vsm:m-auto md:flex w-full">
                    <div className="flex items-center vsm:justify-center md:justify-start gap-4 w-full">
                        <div>
                            <Image
                                src="/profile-pic.svg"
                                alt="Profile"
                                width={80}
                                height={80}
                                className="object-cover"
                            />
                        </div>
                        <div className="">
                            <h5 className="text-black font-semibold vsm:text-base ">Welcome, Temiloluwa</h5>
                            <p className="text-base text-sm font-medium text-black">My profile Completeness</p>
                            <div className="flex items-center text-black">
                                <Line percent={60} strokeWidth={4} trailWidth={4} strokeColor="#EF2424" style={{marginRight: "8px"}} /><div className="text-sm">60%</div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex items-center vsm:justify-center md:justify-start  gap-4 w-full vsm:my-6 md:mt-0">
                        <p className="text-black text-base font-bold">Relationship Type:</p>
                        <select value="Dating" className="bg-white shadow-lg rounded-lg px-4 py-1 text-black text-sm" onChange={handleOnChange}>
                            <option>
                                Dating
                            </option>
                            <option>
                                Single
                            </option>
                            <option>
                                Searching
                            </option>
                            <option>
                                Talking Stage
                            </option>
                        </select>
                    </div>
                  </div>
                </div>
                {/* card head end */}

                {/* cards */}
                <div className="mt-10 flex flex-wrap gap-6  vsm:justify-center md:justify-start">
                    {data?.map((e, key) => (
                        <div className="rounded-lg shadow-md vsm:max-w-[250px] md:w-[250px] h-[350px]" key={key}>
                        {/* head */}
                        <div className="vsm:max-w-[250px] md:w-[250px] h-[100px]">
                            <Image
                                src={e.headImg}
                                alt="Profile"
                                width={250}
                                height={50}
                                className="object-cover"
                            />
                        </div>
                        <div className="relative flex flex-col justify-between h-[230px]">
                            <div className="flex items-center justify-between px-6 py-2">
                                <div>
                                    <h5 className="text-black text-sm font-semibold ">{e.name1}, {e.age}</h5>
                                    <h5 className="text-black text-xs font-semibold ">{e.location}</h5>
                                </div>
                                <div>
                                    <h5 className="text-black text-sm font-semibold text-right">{e.percent}</h5>
                                    {e.addressStatus !== "" ? 
                                        <h5 className="text-black text-sm font-semibold flex items-center text-right">
                                        <Image
                                        src="/tick.svg"
                                        alt="Profile"
                                        width={12}
                                        height={12}
                                        className="object-cover"
                                    /><span className=" text-xs">{e.addressStatus}</span></h5> : null
                                    }
                                </div>
                            </div>
                            <div className="mt-2 mb-4">
                                <p className="text-black text-[10px] px-6">{e.description}</p>
                            </div>
                            <div className="relative flex items-center justify-between px-6 mt-auto">
                                <button className={`rounded-[50px] px-3 py-1 ${e?.color == '#EF2424' ? "bg-[#EF2424]" : "bg-[#00A389]"}`}>
                                    <span className="text-white text-sm">More Info</span>
                                </button>
                                <div>
                                    <Image
                                    src={e.heart}
                                    alt="Profile"
                                    width={30}
                                    height={30}
                                    className="object-cover"
                                />
                                </div>
                            </div>
                            <div className="flex justify-center absolute top-[-25px] left-[100px] rounded-[50%] ">
                                <Image
                                    src={e.avatar}
                                    alt="Profile"
                                    width={50}
                                    height={50}
                                    className="object-cover"
                                />
                            </div>
                            
                        </div>
                        {/* head */}
                    </div>
                    ))}
                </div>
            </div>
            {/* Card head end */}
        </div>
    </div>
  );
}
