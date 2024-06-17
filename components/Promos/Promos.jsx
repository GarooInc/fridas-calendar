"use client"
import React, { useEffect, useState } from 'react'
import PocketBase from 'pocketbase'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Promos = () => {
    const [promos, setPromos] = useState([]);

    const pb = new PocketBase('https://dev.garooinc.com/fridas')
    pb.autoCancellation(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('promos').getFullList({
                    sort: '-created',
                });
                console.log(records)
                setPromos(records);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData()
    }, []);

  return (
    <div className="carousel w-full">
        {
            promos.map((promo, index) => {
                return(
                    <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
                        <div  className="flex justify-center items-start relative border-t-2 border-black w-full">
                                <img src={`https://dev.garooinc.com/fridas/api/files/${promo.collectionId}/${promo.id}/${promo.picture}?token=`} alt={promo.title} className="w-full h-72 lg:h-80 object-cover brightness-50" />
                                <div className="absolute bottom-4 left-4 flex flex-col lg:w-full h-24 gap-2">
                                    <span className="text-white lg:text-xl text-md w-fit bg-purple p-2 rounded-full">{promo.subtitle}</span>
                                    <h2 className="text-white lg:text-4xl text-2xl font-bold uppercase">{promo.title}</h2>
                                </div>
                                <a href={`#slide${index + 1}`} className="absolute  lg:top-32 top-28 right-4  text-gray-300 p-2 text-4xl"><IoIosArrowForward /></a>
                                <a href={`#slide${index - 1}`} className="absolute  lg:top-32 top-28 left-4  text-gray-300 p-2 text-4xl"><IoIosArrowBack /></a>
                        </div>
                    </div>
                )  
        }
        )}
    </div>
  )
}

export default Promos