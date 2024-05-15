//import {Header} from "@/components/Header";
import { BookList } from "@/components/BookList";

import { WindowSizeComponent } from "@/components/WindowSizeComponent";
import { useState, useEffect } from "react";
import { getAllSets } from "@/service/pokemon.service";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import Image from "next/image"
import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps } from "next";
import { useSets } from "@/hooks/react-query-hooks";
import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import { QueryKeys } from "@/models/enums"
import Modal from "@/components/Modal";
import ControlledForm from "@/components/Login/Login";

export const getStaticProps: GetStaticProps<{ dehydratedState: DehydratedState; }> = async () => {
  console.log("I AM SERVER");
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.sets],
    queryFn: async () => {
      const sets = await getAllSets();
      return sets;
    },
  });
  console.log("I am from server");
  return { props: { dehydratedState: dehydrate(queryClient) }, revalidate: 30 };
};


export default function (props: { serverSets: Set[] }) {
  console.log(props);

  const { data: sets, isLoading, isError } = useSets();
  return (
    
    <div className="grid grid-cols-4 px-3 flex-wrap h-screen overflow-y-scroll" >
      {isLoading && "Loading...."}
      {sets?.map((set) => {
        return (
          <div key={set.id} className="bg-black/25 group flex px-3 flex-col border-2 h-60 w-80 m-2 p-4 rounded-md shadow-md cursor-pointer relative">
            <div className="relative w-full h-full mb-4">
              <Image src={set?.images.logo || ""} fill alt="set logo" className="object-contain group-hover:scale-105 transition duration-300 ease-in-out"></Image>
            </div>
            <div className="absolute flex justify-center items-center opacity-0 top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent group-hover:opacity-100 transition duration-300 ease-in-out">
              <Modal data={set} />
            </div>
          </div>

        );

      })}
      {isError && "Error"}
    </div>
  );

}
