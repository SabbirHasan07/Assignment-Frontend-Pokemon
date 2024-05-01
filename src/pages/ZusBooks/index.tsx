import Image from "next/image";
import { getAllSets, Set } from "pokemon-tcg-sdk-typescript/dist/sdk"; 
import React, { useEffect } from "react";
import useSetStore from "../Store/Store";

const ZusBooks: React.FC = () => {
    const { data, fetchData } = useSetStore();
    useEffect(() => {
        getAllSets().then((allsets: Set[]) => {
            fetchData(allsets);
        });
    }, []);
    

    return (
        <div>
             {data.map((set: Set) => (
                    <div className="flex" key={set?.id}>
                        <div>Name: {set?.name}</div>
                        <Image  src={set?.images.logo} alt="" height={50} width={50} />

                    </div>
                ))}
        </div>
    );
};

export default ZusBooks;
