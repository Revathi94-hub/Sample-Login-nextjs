'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Dashboard = () => {
    const router = useRouter();
    const handleLogout = () => {
        router.push('/Login');
    }
  return (
    <div>
      <nav>
        <div className="flex flex-row items-center justify-between mx-4">
          <h1 className="text-2xl font-bold"> Dashboard </h1>
          <Link href="#home" className="text-xxl cursor-pointer text-blue-700">Home</Link>
          <Link href="#location" className="text-xxl cursor-pointer text-blue-500">Location</Link>
          <Link href="#demographics" className="text-xxl cursor-pointer text-blue-500">Demographics</Link>
          <Link href="#history" className="text-xxl cursor-pointer text-blue-500">History</Link>
          <button className="ml-2 mb-2 text-xxl p-2 cursor-pointer" onClick={handleLogout}>
            Logout
          </button>
        </div> 
      </nav>
      <hr />


      <div className='bg-gradient-to-l from-primary-200 to-primary-700'>
      {/* Home page section */}
      <main id="home">
        <div>
          <h1 className="text-2xl font-bold p-2 text-center w-full animate-fade-in">Welcome to Jayankondam</h1><br/>
          <p className="text-lg p-2 text-center w-full">Jayankondam is a First Grade Municipality in Ariyalur district of Tamil Nadu in India. As of 2023, the town had a population of 46,000 amd a major city of ariyalur district. Huge amounts of lignite deposits have been found here and power projects have been initiated by the Neyveli Lignite Corporation.[1] This town has more than 25 temples of various historical periods in the vicinity. The existing Government Higher Secondary School at Jayankondam is as the old as the town and has nearly 2000 Students to its name.</p>
        </div>
     </main>


      {/* Location page section */}
      <main id="location">
        <div>
          <h1 className="text-2xl font-bold p-2 w-full">Location</h1> <hr/>
          <p className="text-lg p-2 w-full">Jayankondam is well-connected with roadways. The national highway NH-81 passes through this town, connects Chidambaram and Tiruchirapalli. The state highway SH-140 which connects Virudachalam with Kumbakonam passes through this town. Chennai is located at the distance of 260 km. Kumbakonam is to the south, around 39 km away from Jayankondam via the Neelathanallur-Mathanathur bridge. Ariyalur is 38 km to the west. Viruthachalam is 36 km to the north and Chidambaram is 50 km to the east.
            Jayankondam Town limit extends over an area of 28 km2.
            its contains many more temples near by about 1000 years old temples are there like udayarpalayam shivan temple and a jameen palace is near there .
          </p>
        </div>
      </main>



      {/* Demographics page section */}
      <main id="demographics">
        <div>
          <h1 className="text-2xl font-bold p-2 w-full">Demographics</h1> <hr/>
          <p className="text-lg p-2 w-full">As of 2023, the town had a population of 46,000 amd a major city of ariyalur district. Huge amounts of lignite deposits have been found here and power projects have been initiated by the Neyveli Lignite Corporation.[1] This town has more than 25 temples of various historical periods in the vicinity. The existing Government Higher Secondary School at Jayankondam is as the old as the town and has nearly 2000 Students to its name.</p>
        </div>
      </main>



      {/* History page section */}
      <main id="history">
        <div>
          <h1 className="text-2xl font-bold p-2 w-full">History</h1> <hr/>
          <p className="text-lg p-2 w-full">Jayankondacholapuram is full name of Jayankondam. Original name is Nellimanagramam. The place was renamed as Jayankondacholapuram (ஜெயங்கொண்டசோழபுரம்) during the period of King Rajendracholan (ராஜேந்திரசோழன்) as they (Rajendra and his son) were victorious in many wars and campaigns. Jayankondam was established as town panchayat during British rule. Jayankondam was upgraded as second municipality of Perambalur district after Perambalur.Now it is part of Ariyalur district and a first grade municipality</p>
        </div>
      </main>
      </div>
    </div>  
  );
};
export default Dashboard;