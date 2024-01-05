import Menus from "./Menus";

export default function Navigation() {
  return (
    <>
      <div className="flex">
        {/* Home Menu */}
        <div className="basis-1/2">
            <div className="pl-32 pt-3">
                <a href="" className="text-3xl font-bold">Fernando</a>
            </div>
        </div>
        {/* Menus */}
        <div className="basis-1/2">
          <Menus />
        </div>
      </div>
    </>
  );
}
