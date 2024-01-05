import Navigation from "./Navigation";

export default function Connect() {
  return (
    <>
      <Navigation />
      <div className="px-32 pt-24 flex flex-col">
        <label htmlFor="">Nama</label>
        <input type="text" value={"Nama"} />
        <label htmlFor="">Email</label>
        <input type="text" value={"Email"} />
        <label htmlFor="">Pesan</label>
        <textarea name="pesan" id="" cols="30" rows="5">Pesan</textarea>
        <button className="mt-5 bg-gray-800 px-5 py-5">
            Submit
        </button>
      </div>
    </>
  );
}
