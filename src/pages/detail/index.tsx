import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { getPokemonDetail } from "../../utils/apis/api";
import { useEffect, useState } from "react";
import { ResponsePayloadDetail } from "../../utils/types/api";

const Detail = () => {
  const { name } = useParams();
  const [detailDatas, setDetailDatas] = useState<Partial<ResponsePayloadDetail>>({});

  useEffect(() => {
    getDetailData(name);
  });

  const getDetailData = async (name: string | undefined) => {
    try {
      const result = await getPokemonDetail(name);
      setDetailDatas(result);
      //   console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-3 h-60">
        <div className="flex flex-col items-center justify-between border border-black shadow-xl p-4 rounded-md">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${detailDatas.id}.svg`} alt={detailDatas.name} width={170} height={200} className="h-auto w-auto" />
          <div className="flex flex-wrap gap-2">
            {detailDatas.types &&
              detailDatas.types.map((data: any, index: number) => (
                <div key={index} className="p-2 bg-gray-600 text-white rounded-full text-xs">
                  {data.type.name}
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col justify-center border border-black shadow-xl p-4 rounded-md">
          <span className="text-sm mt-3">Name: {detailDatas.name}</span>
          <hr />
          <span className="text-sm mt-3">Weight: {detailDatas.weight}</span>
          <hr />
          <span className="text-sm mt-3">Height: {detailDatas.height}</span>
          <hr />
        </div>
      </div>
      <div className="grid grid-cols-1 mt-10">
        <div className="border border-black shadow-xl rounded-md p-5">
          {detailDatas.stats &&
            detailDatas.stats.map((data: any, index: number) => (
              <div key={index}>
                <div className="flex justify-between">
                  <span className="text-sm">{data.stat.name}</span>
                  <span className="text-sm">{data.base_stat}</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${data.base_stat}%` }}></div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 my-5 h-40">
        <div className="flex flex-col border border-black shadow-xl rounded-md p-5">
          {detailDatas.abilities &&
            detailDatas.abilities.map((data: any, index: number) => (
              <span key={index} className="text-sm">
                {data.ability.name}
              </span>
            ))}
        </div>
        <div className="flex flex-col border border-black shadow-xl rounded-md p-5">
          {detailDatas.moves &&
            detailDatas.moves.map((data: any, index: number) => {
              if (index <= 5) {
                return (
                  <span key={index} className="text-sm">
                    {data.move.name}
                  </span>
                );
              }
            })}
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
