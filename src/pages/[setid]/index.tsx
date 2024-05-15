
import { getAllSets, getSetById } from "@/service/pokemon.service";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import Image from "next/image"


import { GetStaticPaths, GetStaticProps } from "next";

import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import { QueryKeys } from "@/models/enums"
import { useRouter } from "next/router";
import { useSet } from "@/hooks/react-query-hooks";

export const getStaticPaths: GetStaticPaths = async () => {
  let allSets = await getAllSets();
  let listOfSetIdObjects = allSets.map((x) => {
    return { params: { setid: x.id } };
  });

  return { paths: listOfSetIdObjects.splice(0, 10), fallback: true };
};
export const getStaticProps: GetStaticProps<{ dehydratedState: DehydratedState; }> = async (contex) => {
  console.log("I AM SERVER");


  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.set, contex?.params?.setid],
    queryFn: async () => {
      const set = await getSetById(contex?.params?.setid as string);
      return set;
    },
  });
  console.log("I am from server");
  return { props: { dehydratedState: dehydrate(queryClient) }, revalidate: 30 };
};

const SetList = (props: { serverSets: Set }) => {

  console.log(props);
  const router = useRouter();

  const { data: set, isLoading, isError } = useSet(router?.query?.setid as string);
  return (
    <div className="px-3 flex flex-wrap">
      {isLoading && "Loading...."}
      <div key={set?.id} className="flex px-3 flex-col">
        <div className="relative w-[100px] h-[100px]">
          <Image src={set?.images.logo || ""} fill alt="set logo"></Image>
        </div>
        <div className="">{set?.name || "loading...."}</div>
      </div>

      {isError && "Error"}
    </div>
  );

}
export default SetList;