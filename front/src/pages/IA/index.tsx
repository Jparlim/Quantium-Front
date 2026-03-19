import { useEffect, useState } from "react";
import ia from "../../../Images/Tool.png"
import client from "../../../Images/Users.png"
import financial from "../../../Images/Bar chart-2.png"
import calendar from "../../../Images/Calendar.png"
import menu from "../../../Images/Menu.png"
import home from "../../../Images/Home (1).png"
import clipboard from "../../../Images/Clipboard.png"
import pen from "../../../Images/Icon.png"
import trash from "../../../Images/Icon (1).png"
import axios from "axios";

interface datasIA {
    [nome:string]: {type: string | number | boolean}
}

export function IA() {
    const [isOpen, setIsOpen] = useState(false);
    const [list, setlist] = useState<datasIA>({});

    useEffect(() => {
        async function getDatasIA() {
            try {
                const data = await axios.get<datasIA>("http://localhost:3000/datas_IA")
                console.log(data)
                setlist(data.data)
            } catch(error) {
                console.log(error);
            }
        }

        getDatasIA();
    })

    const handleDeleteANDPut = async function( nome:string, tipo: string | number | boolean, style: "Delete" | "Put" ) {
        if(style === "Delete") {
            await axios.put("http://localhost:3000/...", {

            })
        }

        if(style === "Put") {
            await axios.delete("http://localhost:3000/...")
        }
    }

    return (
        <div className="bg-backGround h-screen flex items-center justify-center relative">
            <div className={`w-[95%] h-[95%] flex rounded-[20px] shadow-2xl bg-white relative overflow-y-auto`}>

                {!isOpen ? (
                    <div className="flex flex-col gap-[25px] w-[230px] h-[95%] border-l-border border-r-[2px] mt-4">

                        <div className="flex items-center mt-5 pl-[25px]">
                            <button type="button" onClick={() => setIsOpen(!isOpen)}>
                                <img src={menu} className="size-8 hover:cursor-pointer active:scale-[90%]" alt="" />
                            </button>
                            <h1 className={`text-[22px] transition-all duration-500 translate-x-[15px]`}>Dashboard</h1>
                        </div>
                        
                        <div className={`flex flex-col gap-[10px] mt-[10px] transition-all duration-500 opacity-100`}>
                            <div className="flex items-center gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={home} className="size-[25px] " alt="" />
                                <p className="text-[15px] ">Tela inicial</p>
                            </div>

                            <div className="flex items-center gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={clipboard} className="size-[25px] " alt="" />
                                <p className="text-[15px]">Estoque</p>
                            </div>
                            
                            <div className="flex items-center gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={ia} className="size-[25px] " alt="" />
                                <p className="text-[15px]">Configuração IA</p>
                            </div>
                            
                            <div className="flex items-center gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={client} className="size-[25px] " alt="" />
                                <p className="text-[15px]">Clientes</p>
                            </div>
                            
                            <div className="flex items-center gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={financial} className="size-[25px] " alt="" />
                                <p className="text-[15px]">Financeiro</p>
                            </div>
                            
                            <div className="flex items-center gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={calendar} className="size-[25px] " alt="" />
                                <p className="text-[15px]">Agenda</p>
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className={`flex flex-col gap-[25px] h-12 mt-4 absolute`}>

                        <div className="flex items-center mt-5 pl-[25px]">
                            <button type="button" className="absolute" onClick={() => setIsOpen(!isOpen)}>
                                <img src={menu} className="size-8 hover:cursor-pointer active:scale-[90%]" alt="" />
                            </button>
                            <h1 className={`text-[22px] transition-all duration-100 -translate-x-0 opacity-0 pointer-events-none`}>Dashboard</h1>
                        </div>

                        <div className={`flex-col mt-[10px] transition-all duration-100 -translate-x-[20px] opacity-0 pointer-events-none`}>
                            <div className="flex items-center gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={home} className="size-[25px] " alt="" />
                                <p className="text-[15px]">Tela inicial</p>
                            </div>

                            <div className="flex items-center mt-[10px] gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={clipboard} className="size-[25px] " alt="" />
                                <p className="text-[15px]">Estoque</p>
                            </div>
                            
                            <div className="flex items-center mt-[10px] gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={ia} className="size-[25px] " alt="" />
                                <p className="text-[15px]">Configuração IA</p>
                            </div>
                            
                            <div className="flex items-center mt-[10px] gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={client} className="size-[25px] " alt="" />
                                <p className="text-[15px]">Clientes</p>
                            </div>
                            
                            <div className="flex items-center mt-[10px] gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={financial} className="size-[25px] " alt="" />
                                <p className="text-[15px]">Financeiro</p>
                            </div>
                            
                            <div className="flex items-center mt-[10px] gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={calendar} className="size-[25px] " alt="" />
                                <p className="text-[15px]">Agenda</p>
                            </div>
                        </div>

                    </div>
                )}

                <div className="w-full mx-5 flex flex-col">
                    <div className="flex justify-between items-center my-5 pb-4 border-b-[1px]">
                        <h1 className="font-semibold text-3xl">Configuração da Inteligencia Artificial</h1>

                        <button className="bg-azulButton w-[150px] h-[50px] rounded-[15px] text-white active:scale-90 transition-all duration-100 hover:bg-azulButton">salvar alterações</button>
                    </div>

                    <div className="flex flex-col gap-9 border-b-[1px] pb-4">
                        <h2 className="font-normal text-2xl">Identidade da IA</h2>

                        <div className="flex flex-col gap-6">
                            <div className="flex gap-2 justify-between">
                                <p className="text-[17px] text-black/50 font-sans font-semibold">Nome da empresa</p>
                                <input type="text" className="w-[70%] h-10 border-current-bordas border-[2px] pl-4 rounded-[5px] focus:outline-none"/>
                            </div>

                            <div className="flex gap-2 justify-between">
                                <p className="text-[17px] text-black/50 font-sans font-semibold">Nome da IA</p>
                                <input type="text" className="w-[70%] h-10 border-current-bordas border-[2px] pl-4 rounded-[5px] focus:outline-none"/>
                            </div>

                            <div className="flex gap-2 justify-between">
                                <p className="text-[17px] text-black/50 font-sans font-semibold">Instruções gerais</p>
                                <textarea className="w-[70%] h-32 border-current-bordas border-[2px] pt-2 pl-4 rounded-[5px] focus:outline-none "/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col my-5 gap-4">
                        <h2 className="font-normal text-2xl">Dados que a IA deve coletar</h2>
                        
                        <div className="w-[40%] h-auto border-[2px] rounded-md">

                            <div className="flex justify-between mx-2 px-4 pr-36 border-b-2">
                                <p className="text-[17px] text-black/50 font-sans font-semibold">Nome do dado</p>
                                <p className="text-[17px] text-black/50 font-sans font-semibold">Tipo</p>
                            </div>

                            {Object.entries(list!).map(dado => {
                                return (
                                <div className="flex h-8 justify-between mx-2 px-6 border-b-2 items-center">
                                    <p className="font-normal">{dado[0]}</p>
                                    <p className="font-normal">{dado[1].type}</p>

                                    <div className="flex gap-2 size-5">
                                        <img className="hover:cursor-pointer" src={pen} alt="" onClick={() => handleDeleteANDPut(dado[0], dado[1].type, "Put")}/>
                                        <img className="hover:cursor-pointer" src={trash} alt="" onClick={() => handleDeleteANDPut(dado[0], dado[1].type, "Delete")}/>
                                    </div>
                                </div>
                            )})}
                        
                        </div>

                    </div>
                    <button>

                    </button>
                </div>
            </div>

        </div>
    )
}