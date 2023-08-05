'use client';

import dynamic from "next/dynamic";
import { IconType } from "react-icons";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";

const Map = dynamic(() => import('../Map'), { 
  ssr: false 
});

interface ListingInfoProps {
  user: SafeUser,
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category: {
    icon: IconType,
    label: string;
    description: string;
  } | undefined
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng


  return ( 
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div 
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>
            {guestCount} guests
          </div>
          <div>
            {roomCount} rooms
          </div>
          <div>
            {bathroomCount} bathrooms
          </div>
        </div>
      </div>
      <a className="underline text-2xl" href="https://goo.gl/maps/PQrPGoqvrJn5rKzA8" target="South Padre Island">
        South Padre Island
        </a>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon} 
          label={category?.label}
          description={category?.description} 
        />
      )}
      <hr />
      <div className="
      text-lg font-light text-neutral-500">
        {description}
      </div>
      <div>
  <p className="gap-2"><strong>RATES:</strong></p>
  <ul>
    <li>Weekend Daily Rate (Fri-Sun): $350 per night</li>
    <li>Weekday Daily Rate (Mon-Thur): $300 per night</li>
    <li>Stay a week and save!! Weekly Rate (Mon-Sun): $1,800</li>
  </ul>
  <p><strong>Cleaning Fee: $150</strong></p>
  <p><strong>Check-in & Check-out:</strong> We will do our best to accommodate early check-ins (9:00 AM) when possible. Late check-out is available until 12:00 PM.</p>
  <p><strong>Ask about our Discounts:</strong> For more information, please contact us via email or text:</p>
  <p>Email: lbgvisual@gmail.com</p>
  <p>Phone: Laura Vela @ (956) 459-7743</p>
</div>
      <hr />
      
    </div>
   );
}
 
export default ListingInfo;