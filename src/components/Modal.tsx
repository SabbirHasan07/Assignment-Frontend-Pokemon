import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Modal = ({ data }: any) => {
    const [open, setOpen] = useState<boolean>(false);
    return <>
        <button onClick={() => setOpen(true)} className="px-4 py-1 bg-orange-400 hover:bg-yellow-400 rounded-2xl">Quick View</button>
        {open && <div className={`bg-black/25 absolute h-full top-0 right-0 left-0 bottom-0 z-10 flex justify-center items-center`}>
            <div className="bg-black/75 text-white w-80 h-80 rounded-2xl flex justify-center items-center  ">
                <div className="flex-col flex">
                    <div className="mb-2">
                        <Image src={data?.images.logo} alt="" height={150} width={150} />
                    </div>
                    <h1 className="text-center texr-xl font-bold">{data?.name}</h1>
                </div>
                <Link className="mb-48 " href="" onClick={() => setOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </Link>
            </div>
        </div>}
    </>
}

export default Modal;