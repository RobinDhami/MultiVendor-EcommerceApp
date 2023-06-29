import React from 'react'
import KhaltiCheckout from "khalti-checkout-web";
import config from './KhaltiConfig';
export default function Khalti() {
    let checkout = new KhaltiCheckout(config);
  return (
    <div className="flex w-full pb-5 border-b mb-2 pl-2">
      <div 
        className="w-[25px] h-[25px]  mt-3 rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
        onClick={() => checkout.show({amount: 1000})}
      >
      </div>
      <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1] p-3">
        Pay with Khalti
      </h4>
    </div>
  )
}
