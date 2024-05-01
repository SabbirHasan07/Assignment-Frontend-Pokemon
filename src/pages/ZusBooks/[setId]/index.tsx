import useSetStore from "@/pages/Store/Store";
import Image from "next/image";
import { useRouter } from "next/router";
import { getAllSets,Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { useEffect, useState } from "react";


const ZustBook: React.FC =()=>{
    
    const router = useRouter();
    const { setId } = router.query; // Retrieve the dynamic route parameter
    const { data, fetchData } = useSetStore();
   

    useEffect(() => {
        if (setId) {
            // Fetch set details when the setId is available
            getAllSets().then((allsets: Set[]) => {
                const set = allsets.find((set: Set) => set.id === setId);
                if (set) {
                    fetchData([set]); // Fetch data for the specific set
                }
            });
        }
    }, [setId]);

    return (
        <div>
            {data.map((set: Set) => (
                <div className="flex" key={set.id}>
                    <div>Name: {set.name}</div>
                    <Image src={set.images?.logo} alt="" height={50} width={50} />
                </div>
            ))}
        </div>
    );
};

export default ZustBook;