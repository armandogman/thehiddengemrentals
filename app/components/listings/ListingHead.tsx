'use client';

import Image from "next/image";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return ( 
    <>
      <Heading
        title={title}
      />
      <a className="underline text-xl" href="https://photos.app.goo.gl/3iVq5EN2BuLptoJd8" target="See More Pictures of the Hidden Gem">
      See More Pictures of the Hidden Gem
        </a>
      <div className="
          w-full
          h-[80vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <Image
          src={imageSrc}
          fill
          className="object-fit: none"
          alt="Image"
        />
        
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          <HeartButton 
            listingId={id}
            currentUser={currentUser}
          />
        </div>
      </div>
      
      
    </>
   );
}
 
export default ListingHead;