"use client"
import Image from "next/image";
import { show, hide } from "../../store/slices/sidebarSlice"
import { useSelector, useDispatch } from "react-redux";

export default function Profile() { 
  const dispatch = useDispatch();
  const sidebarStatus = useSelector((state) => state.sidebar.status); 
  
  const handleShowSidebar = () => {
    if (sidebarStatus == true) {
        dispatch(hide());
    } else {
        dispatch(show())
    }
  }
  return (
    <div className="flex p-4 w-full">
      <div className="flex justify-center w-full">
        {/* Cover photo */}
        <div className="vsm:absolute vsm:left-5 vsm:mt-2 lg:relative mt-8" onClick={handleShowSidebar}>
          <Image
              src="/bar.svg"
              alt="Profile"
              width={20}
              height={20}
              className="object-cover"
          />
        </div>
        {/* MAIN CONTENT */}
        <main className="container mx-auto px-4 vsm:mt-8 mt-6">
          {/* COVER + PROFILE SECTION */}
          <section className="relative">
            <div className="flex justify-between py-5 px-10 absolute w-full vsm:mb-10 mb-0">
            <button className="bg-[#00000099] py-1 px-4 rounded-md text-white text-sm font-medium top-10 left-5">
              <span>Back</span>
            </button>
            <button className="bg-[#00000099] py-1 px-4 rounded-md text-white text-sm font-medium top-10 left-5">
              <span>Update Cover</span>
            </button>
            </div>
            {/* Cover photo (replace with your own background image URL) */}
            <div
              className="h-[200px] bg-cover bg-center rounded-lg"
              style={{ backgroundImage: 'url("/profile-cover.svg")' }}
            ></div>

            {/* Profile details */}
            <div className="px-4 py-2 relative flex">
              {/* Profile avatar */}
              <div className="absolute top-[-110px] left-[60px]">
                <div className="flex flex-wrap">
                  <div className="relative w-[150px]">
                    <Image
                      src="/profile-sqr.svg"
                      alt="Profile"
                      width={150}
                      height={150}
                      className="object-cover"
                    />
                    <div className=" absolute top-[93%] left-[94%] w-[150px]">
                      <Image
                        src="/add-icon.svg"
                        alt="Profile"
                        width={20}
                        height={20}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Name, Location, etc. */}
                  <div className="ml-3 vsm:mt-2 py-4 flex">
                    <div>
                      <h1 className="text-xl font-semibold text-black">Temiloluwa, 27</h1>
                      <p className="text-black text-base">Lagos</p>
                    </div>
                    <div className="ml-4">
                      <Image
                        src="/edit-icon.svg"
                        alt="Profile"
                        width={20}
                        height={20}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons (Edit Profile, Edit Match Setup) */}
              <div className="flex space-x-4 flex justify-end w-full vsm:mt-[120px] sm:mt-[50px] md:mt-0">
                <button className="border border-red-500 px-2 py-1 rounded-[50px] bg-[#EF2424] text-white text-xs hover:-translate-y-[2px] font-medium  vsm:w-full md:w-[120px]">
                  Edit Profile
                </button>
                <button className="border border-red-500 px-2 py-1 rounded-[50px] bg-[#EF2424] text-white text-xs hover:-translate-y-[2px] font-medium vsm:w-full md:w-[120px]">
                  Edit Match Setup
                </button>
              </div>
            </div>
          </section>

          {/* BODY CONTENT */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 w-fit">
            {/* About Myself */}
            <div className="md:col-span-2 bg-white px-6 py-4 rounded shadow h-fit">
              <div className="flex gap-2">
                <h2 className="font-medium text-lg mb-2 text-[#00000099]">
                  A few words about myself
                </h2>
                <div>
                  <Image
                    src="/editPen.svg"
                    alt="Profile"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-gray-700 max-w-[430px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                feugiat, ex non pulvinar sodales, libero erat volutpat nunc, a
                blandit enim lorem nec orci.
              </p>
            </div>          
          </section>

          <section className="mt-6 w-fit">
            {/* About Myself */}
            <div className="vsm:col-span-2 md:col-span-5 bg-white px-6 py-4 rounded shadow h-fit flex vsm:justify-center md:justify-start flex-wrap gap-5">
              <div className="flex shadow border-[#D9D9D9] h-[70px] w-[70px] bg-cover bg-center rounded-lg" /* style={{ backgroundImage: 'url("/profile-sqr.svg")', objectFit: "cover" }} */>
                  <Image
                    src="/profile-sqr.svg"
                    alt="Profile"
                    width={70}
                    height={70}
                    className="object-cover"
                  />
              </div>
              <div className="flex shadow p-2 border-[#D9D9D9] h-[70px] w-[70px] bg-cover bg-center rounded-lg">
                  <Image
                    src="/thumbnail.svg"
                    alt="Profile"
                    width={70}
                    height={70}
                    className="object-cover"
                  />
              </div>
              <div className="flex shadow p-2 border-[#D9D9D9] h-[70px] w-[70px] bg-cover bg-center rounded-lg">
                  <Image
                    src="/thumbnail.svg"
                    alt="Profile"
                    width={70}
                    height={70}
                    className="object-cover"
                  />
              </div>
              <div className="flex shadow p-2 border-[#D9D9D9] h-[70px] w-[70px] bg-cover bg-center rounded-lg">
                  <Image
                    src="/thumbnail.svg"
                    alt="Profile"
                    width={70}
                    height={70}
                    className="object-cover"
                  />
              </div>
              <div className="flex shadow p-2 border-[#D9D9D9] h-[70px] w-[70px] bg-cover bg-center rounded-lg">
                  <Image
                    src="/thumbnail.svg"
                    alt="Profile"
                    width={70}
                    height={70}
                    className="object-cover"
                  />
              </div>
            </div>          
          </section>        

          {/* HOBBIES & INTERESTS */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {/* My Hobbies */}
            <div className="bg-white p-4 rounded shadow">
              <div className="flex gap-2 justify-between">
                <h2 className="font-semibold text-md mb-2 text-black">
                  My Hobbies
                </h2>
                <div>
                  <Image
                    src="/edit-icon.svg"
                    alt="Profile"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="grid vsm:grid-cols-3 sm:grid-cols-4 gap-4 gap-6">
                {/* Example Hobby Icons */}
                <div className="mb-6">
                  <div className="w-[50px] h-[50px]">
                    <div className="flex justify-center text-2xl rounded-[50%]  w-full h-full ">
                      <Image
                        src="/beach.svg"
                        alt="Beach Icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[8px] mt-2 text-center">Layin on the beach</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-[50px] h-[50px]">
                    <div className="flex justify-center rounded-[50%] bg-[#BC1B1B] w-full h-full p-2">
                      <Image
                        src="/biking-icon.svg"
                        alt="Biking Icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[8px] mt-2  text-center">Biking</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-[50px] h-[50px]">
                  <div className="flex justify-center rounded-[50%] bg-[#F6E123]  w-full h-full  p-2">
                      <Image
                        src="/cooking-icon.svg"
                        alt="Cooking Icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[8px] mt-2  text-center">cooking</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-[50px] h-[50px]">
                  <div className="flex justify-center rounded-[50%] bg-[#9747FF]  w-full h-full  p-2">
                      <Image
                        src="/dancing-icon.svg"
                        alt="Dancing Icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[8px] mt-2  text-center">Dancing</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-[50px] h-[50px]">
                  <div className="flex justify-center rounded-[50%] bg-[#2DE9F5]  w-full h-full  p-2">
                      <Image
                        src="/museum-icon.svg"
                        alt="Museum icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[8px] mt-2  text-center">Dancing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* My Interests */}
            <div className="bg-white p-4 rounded shadow">
              <div className="flex gap-2 justify-between">
                <h2 className="font-semibold text-md mb-2 text-black">
                  My Interests
                </h2>
                <div>
                  <Image
                    src="/edit-icon.svg"
                    alt="Profile"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="grid vsm:grid-cols-3 sm:grid-cols-4 gap-4 gap-6">
                {/* Example Hobby Icons */}
                <div className="mb-6">
                  <div className="w-[50px] h-[50px]">
                    <div className="flex justify-center rounded-[50%] bg-[#1B34BC] w-full h-full p-2">
                      <Image
                        src="/travelIcon.svg"
                        alt="Travel Icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[8px] mt-2  text-center">Travel</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-[50px] h-[50px]">
                    <div className="flex justify-center rounded-[50%] bg-[#F62FD6] w-full h-full p-2">
                      <Image
                        src="/drawing-icon.svg"
                        alt="Drawing Icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[8px] mt-2  text-center">Drawing</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-[50px] h-[50px]">
                  <div className="flex justify-center rounded-[50%] bg-[#EF2424] w-full h-full p-2">
                      <Image
                        src="/history-icon.svg"
                        alt="History Icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[8px] mt-2  text-center w-[40px]">History</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-[50px] h-[50px]">
                  <div className="flex justify-center rounded-[50%] bg-[#13E234] w-full h-full p-2">
                      <Image
                        src="/woodwork-icon.svg"
                        alt="Woodworking Icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[8px] mt-2  text-center w-[20px]">Woodworking</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-[50px] h-[50px]">
                  <div className="flex justify-center rounded-[50%] bg-[#F6E123] w-full h-full p-2">
                      <Image
                        src="/Photography-icon.svg"
                        alt="Photography icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[8px] mt-2  text-center">Photography</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-[50px] h-[50px]">
                  <div className="flex justify-center rounded-[50%] bg-[#0C827B] w-full h-full p-2">
                      <Image
                        src="/poetry-icon.svg"
                        alt="Poetry icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[8px] mt-2  text-center">Poetry</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-[50px] h-[50px]">
                    <div className="flex justify-center rounded-[50%] bg-[#2E275C] w-full h-full p-2">
                      <Image
                        src="/knitting-icon.svg"
                        alt="Knitting icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[8px] mt-2  text-center">Knitting</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Me */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-semibold text-md mb-2 text-black">About Me</h2>
              <ul className="text-gray-700 space-y-1">
              <li className="flex items-center w-full">
              <div className="flex items-center gap-2 w-[120px]">
                    <div className="flex justify-center rounded-[50%] bg-[#EF2424] p-1 w-[22px] h-[22px] text-white">
                      <Image
                        src="/gender-icon.svg"
                        alt="Gender icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  <h6 className="text-[12px] ">Gender:</h6>
                </div>
                <h6 className="text-[12px]">Male</h6>
              </li>
              <li className="flex items-center w-full">
              <div className="flex items-center gap-2 w-[120px]">
                    <div className="flex justify-center rounded-[50%] bg-[#3E7BEA] p-1 w-[22px] h-[22px] text-white">
                      <Image
                        src="/age-icon.svg"
                        alt="Age icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  <h6 className="text-[12px] ">Age:</h6>
                </div>
                <h6 className="text-[12px]">27</h6>
              </li>
              <li className="flex items-center">
                <div className="flex items-center gap-2 w-[120px]">
                    <div className="flex justify-center rounded-[50%] bg-[#F6E123] p-1 w-[22px] h-[22px] text-white">
                      <Image
                        src="/occupation-icon.svg"
                        alt="Occupation icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  <h6 className="text-[12px]">Occupation:</h6>
                </div>
                <h6 className="text-[12px] ">Engineer</h6>
              </li>
              <li className="flex items-center w-full">
                <div className="flex items-center gap-2 w-[120px]">
                    <div className="flex justify-center rounded-[50%] bg-[#00A389] p-1 w-[22px] h-[22px] text-white">
                      <Image
                        src="/relationship-icon.svg"
                        alt="Relationship icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  <h6 className="text-[12px] ">Relationship:</h6>
                </div>
                <h6 className="text-[12px]">Single</h6>
              </li>
              <li className="flex items-center w-full">
                <div className="flex items-center gap-2 w-[120px]">
                    <div className="flex justify-center rounded-[50%] bg-[#9747FF] p-1 w-[22px] h-[22px] text-white">
                      <Image
                        src="/location-icon.svg"
                        alt="Location icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  <h6 className="text-[12px] ">Location:</h6>
                </div>
                <h6 className="text-[12px]">Lagos</h6>
              </li>
              <li className="flex items-center w-full">
                <div className="flex items-center gap-2 w-[120px]">
                    <div className="flex justify-center rounded-[50%] bg-[#0B6A59] p-1 w-[22px] h-[22px] text-white">
                      <Image
                        src="/Height-range-icon.svg"
                        alt="Height range icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  <h6 className="text-[12px] ">Height range:</h6>
                </div>
                <h6 className="text-[12px]">5&apos;5 - 6&apos;0</h6>
              </li>
              <li className="flex items-center w-full">
                <div className="flex items-center gap-2 w-[120px]">
                    <div className="flex justify-center rounded-[50%] bg-[#D40C0C] p-1 w-[22px] h-[22px] text-white">
                      <Image
                        src="/weight-icon.svg"
                        alt="Weight icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  <h6 className="text-[12px] ">Weight:</h6>
                </div>
                <h6 className="text-[12px]">60 - 70kg</h6>
              </li>
              <li className="flex items-center w-full">
                <div className="flex items-center gap-2 w-[120px]">
                    <div className="flex justify-center rounded-[50%] bg-[#16166C] p-1 w-[22px] h-[22px] text-white">
                      <Image
                        src="/religion-icon.svg"
                        alt="religion icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  <h6 className="text-[12px] ">Religion:</h6>
                </div>
                <h6 className="text-[12px]">Christianity</h6>
              </li>
              <li className="flex items-center w-full">
                <div className="flex items-center gap-2 w-[120px]">
                    <div className="flex justify-center rounded-[50%] bg-[#CEBB0F] p-1 w-[22px] h-[22px] text-white">
                      <Image
                        src="/nationality-icon.svg"
                        alt="Nationality icon"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  <h6 className="text-[12px] ">Nationality:</h6>
                </div>
                <h6 className="text-[12px]">60 - 70kg</h6>
              </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
