import Layout from "../../components/Layout";
import background from "../../assets/background.jpg";
import backgroundDark from "../../assets/background-dark.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ResponsePayloadDetail } from "../../utils/types/api";
import { getPokemonDetail } from "../../utils/apis/api";
import Swal from "sweetalert2";
import { usePokemonStore } from "../../utils/stores/pokemon-store";
import { useShallow } from "zustand/react/shallow";

const Catch = () => {
  const { name } = useParams();
  const [detailDatas, setDetailDatas] = useState<Partial<ResponsePayloadDetail>>({});
  const [showModal, setShowModal] = useState<boolean>(false);
  const [alias, setAlias] = useState<string>("");
  const navigate = useNavigate();
  const [pokemon, addPokemon] = usePokemonStore(useShallow((state) => [state.pokemon, state.addPokemon]));

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

  const runHandling = () => {
    navigate("/");
  };

  const catchHandling = () => {
    const randomNum = Math.random();
    let duplicate = false;
    pokemon.map((data: any) => {
      if (data.id == detailDatas.id) {
        duplicate = true;
      }
    });

    if (!duplicate) {
      if (randomNum <= 0.5) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Catch pokemon success",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          setShowModal(true);
        }, 1500);
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Catch pokemon fail",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Pokemon already exist",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const submitHandle = () => {
    const dataSubmit = detailDatas;
    dataSubmit.alias = alias;
    addPokemon(dataSubmit);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Pokemon Saved",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <Layout>
        <div className={`w-full h-full relative`}>
          <img src={localStorage.getItem("poketheme") == "dark" ? backgroundDark : background} className="h-full w-full object-cover" />
          <div className="h-24 absolute top-36 left-1/2 -translate-x-1/2">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${detailDatas.id}.svg`} alt={detailDatas.name} width={170} height={200} className="h-full w-full object-contain" />
          </div>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 p-3 bg-green-600 rounded-md text-white border border-white shadow-md">
            <span>{detailDatas.name}</span>
          </div>
          <div className="flex justify-between w-full px-5 absolute bottom-5">
            <div className="p-3 bg-cyan-600 w-48 rounded-md text-white border border-white shadow-md">
              <span className="text-xs">What will you do?</span>
            </div>
            <div className="flex justify-between p-3 bg-amber-600 w-48 rounded-md text-white border border-white shadow-md">
              <div onClick={() => catchHandling()} className="text-xs cursor-pointer hover:text-black">
                catch
              </div>
              <div onClick={() => runHandling()} className="text-xs cursor-pointer hover:text-black">
                run
              </div>
            </div>
          </div>

          {showModal && (
            <div className={`bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 max-h-full h-screen`}>
              <div className="relative z-[999] p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Congratulation!</h3>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-toggle="crud-modal"
                    >
                      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="p-4 md:p-5">
                    <h1 className="text-center mb-5">You caught {detailDatas.name}</h1>
                    <div className="h-20">
                      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${detailDatas.id}.svg`} alt={detailDatas.name} width={170} height={200} className="h-full w-full object-contain" />
                    </div>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-2">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Nickname
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          onChange={(e) => setAlias(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          required
                        />
                      </div>
                    </div>
                    <button
                      onClick={submitHandle}
                      className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Catch;
