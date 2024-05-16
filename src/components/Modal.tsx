import useCounter from "@/pages/Store/useCart";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Modal = ({ data }: any) => {
    console.log(data);
    const [open, setOpen] = useState<boolean>(false);
    const increment = useCounter((state) => state.increment);
    return <>
        <button onClick={() => setOpen(true)} className="px-4 py-1 bg-orange-400 hover:bg-yellow-400 rounded-2xl">Quick View</button>
        {open && <div className={` absolute h-full top-0 right-0 left-0 bottom-0 z-10 flex justify-center items-center`}>
            <div className="bg-black/80 text-white w-96 h-96 rounded-2xl flex justify-center items-center  ">
                <div className=" flex flex-col px-9 py-6 ml-6 rounded-md">
                    <div className="  ">
                        <Image src={data?.images.logo} alt="" height={150} width={150} />
                    </div>
                    <h1 className="text-center texr-xl font-bold mt-3">{data?.name}</h1>
                    <p><span className="text-md ">Series: </span> {data?.series}</p>
                    <p><span className="text-xs ">ptcgoCode: </span> {data?.ptcgoCode}</p>
                    <button onClick={()=>{increment(1)}} className="flex pr-11 py-2 text-end justify-end mt-9 rounded-md font-bold bg-white text-black">Add to<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    </span>
                    </button>
                </div>
                <Link className="mb-80 mr-4" href="" onClick={() => setOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </Link>
            </div>
        </div>}
    </>
}

export default Modal;