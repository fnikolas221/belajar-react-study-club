import { useState,useRef } from "react";
import Bio from "./content/Bio";
import Message from "./content/Message";
import ProfilePhoto from "./content/ProfilePhoto";


export default function Content() {
  const [pesan,setPesan] = useState([]);
  const isiPesan = useRef();

  return (
    <>
      {/* Profile & Bio */}
      <div className="px-32 pt-24 flex gap-10">
        <div className="basis-2/5">
          <ProfilePhoto />
        </div>
        <div className="basis 3/5">
          <Bio />
        </div>
      </div>
      {/* Pesan */}
      <div className="h-screen px-32 mt-36 flex gap-2">
        <div className="basis-1/5">
          <input className="mb-3 text-black" ref={isiPesan}/>
          <button onClick={()=>{
            console.log(pesan);
            setPesan(()=>{
              return pesan.concat([isiPesan.current.value])
            });
          }}
          className="bg-gray-700 text-white px-3 py-3 border-solid rounded-md">
            Kirim Pesan
          </button>
          <p>
            Banyak Pesan {pesan.length}
          </p>
        </div>
        <div className="basis-4/5 overflow-x-auto">
          <div className="flex h-20 gap-3 pb-2 overflow-x-auto">
            {/* List Comprehension Javascript (map, foreach, reduce) */}
            {
              pesan.map((message)=>{
                return <Message isi={message}/>
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}
