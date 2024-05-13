import { Link, useParams } from "react-router-dom";
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-3 h-60 p-3">
        <div className="flex flex-col items-center justify-between border border-black shadow-xl p-4 rounded-md bg-slate-200 dark:bg-slate-700">
          <div className="h-40">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${detailDatas.id}.svg`} alt={detailDatas.name} width={170} height={200} className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="flex flex-col justify-center border border-black shadow-xl p-4 rounded-md bg-slate-200 dark:bg-slate-700">
          <span className="text-sm mt-3 dark:text-white">Name: {detailDatas.name}</span>
          <hr className="border-white border" />
          <span className="text-sm mt-3 dark:text-white">Weight: {detailDatas.weight}</span>
          <hr className="border-white border" />
          <span className="text-sm mt-3 dark:text-white">Height: {detailDatas.height}</span>
          <hr className="border-white border" />
          <div className="flex flex-wrap gap-2 mt-3 dark:bg-slate-700">
            {detailDatas.types &&
              detailDatas.types.map((data: any, index: number) => (
                <div key={index} className="p-2 bg-gray-600 text-white rounded-full text-xs">
                  {data.type.name}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-2 p-3">
        <div className="border border-black shadow-xl rounded-md p-5 bg-slate-200 dark:bg-slate-700">
          {detailDatas.stats &&
            detailDatas.stats.map((data: any, index: number) => (
              <div key={index}>
                <div className="flex justify-between">
                  <span className="text-sm dark:text-white">{data.stat.name}</span>
                  <span className="text-sm dark:text-white">{data.base_stat}</span>
                </div>

                <div className="w-full bg-white rounded-full h-2.5 dark:bg-gray-800">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${Math.min(100, data.base_stat)}%` }}></div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 h-40 p-3">
        <div className="flex flex-col border border-black shadow-xl rounded-md p-5 bg-slate-200 dark:bg-slate-700">
          {detailDatas.abilities &&
            detailDatas.abilities.map((data: any, index: number) => (
              <span key={index} className="text-sm dark:text-white">
                {data.ability.name}
              </span>
            ))}
        </div>
        <div className="flex flex-col border moves-pokemon border-black shadow-xl rounded-md p-5 overflow-y-scroll bg-slate-200 dark:bg-slate-700">
          {detailDatas.moves &&
            detailDatas.moves.map((data: any, index: number) => {
              if (index <= 5) {
                return (
                  <>
                    <span key={index} className="text-sm dark:text-white hover:text-gray-400 cursor-pointer">
                      {data.move.name}
                    </span>
                    <hr className="mb-2 border-white border" />
                  </>
                );
              }
            })}
        </div>
      </div>

      <div className="flex justify-center my-5">
        <Link to={`/battle/${detailDatas.name}`} className="p-2 border border-black rounded-full shadow-xl text-xs hover:bg-black hover:text-white dark:bg-slate-700 dark:text-white dark:hover:bg-slate-800">
          Catch!
        </Link>
      </div>
    </Layout>
  );
};

export default Detail;
