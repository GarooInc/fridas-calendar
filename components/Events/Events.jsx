"use client"
import React, { useEffect, useState } from 'react'
import PocketBase from 'pocketbase'
import { IoTimeOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { split } from 'postcss/lib/list';

const Events = () => {
    const [events, setEvents] = useState([]);


    const pb = new PocketBase('https://dev.garooinc.com/fridas')
    pb.autoCancellation(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('events').getFullList({
                    sort: '-created',
                });
                console.log(records)
                setEvents(records);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData()
    }, []);


    return (
        <div>
        {
            events.map((event, index) => {
                {
                    return event.banner ? (
                        <div key={index} className="flex justify-center items-start relative border-t-2 border-black">
                            <img src={`https://dev.garooinc.com/fridas/api/files/${event.collectionId}/${event.id}/${event.picture}?token=`} alt={event.title} className="w-full h-60 lg:h-80 object-cover brightness-50" />
                            <div className="absolute bottom-4 left-4 flex flex-col gap-2 lg:w-full w-2/3">
                                <span className="text-white lg:text-xl text-md">{event.subtitlebanner}</span>
                                <h2 className="text-white lg:text-4xl text-2xl font-bold uppercase">{event.titlebanner}</h2>
                            </div>
                        </div>
                    ) : (
                        <div key={index} className="flex justify-center items-start p-4 relative border-t-2 border-black">
                            <div className="flex flex-col lg:w-[30%] w-[20%] justify-center items-start relative">
                                <span className="lg:text-xl text-md font-bold text-gray-500 ">{event.weekday}</span>
                                <h2 className="lg:text-6xl text-4xl font-bold text-purple">{event.date < 10 ? `0${event.date}` : event.date}</h2>
                            </div>
                            <div className="w-[40%] lg:w-[35%]">
                                <h3 className="lg:text-4xl text-md font-bold text-black text-start pr-4 lg:p-0">{event.title}</h3>
                            </div>
                            <div className="w-[40%] lg:w-[35%] md:justify-end flex relative">
                                <img src={`https://dev.garooinc.com/fridas/api/files/${event.collectionId}/${event.id}/${event.picture}?token=`} alt={event.title} className="lg:w-60 lg:h-60 w-40 h-40 object-cover" />
                                <span className="absolute bottom-0 right-0 bg-hotpink text-white p-2 text-sm">{event.price}</span>
                            </div>
                            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                            <div className="flex justify-start items-center gap-2">
                                <IoTimeOutline className="text-purple lg:text-lg text-sm" />
                                <span className="text-purple lg:text-lg text-sm">  {event.time.split(' ')[1].substring(0, 5)}</span>
                            </div>
                            <div className="flex justify-start items-center gap-2">
                                <FaLocationDot className="text-purple lg:text-lg text-sm" />
                                <span className="text-purple lg:text-lg text-sm">{event.location}</span>
                            </div>
                            </div>
                        </div>
                    )

            }
            }
            )
        }
        </div>
    )
}

export default Events