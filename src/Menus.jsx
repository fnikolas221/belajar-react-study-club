import Menu from "./Menu";

export default function Menus() {
  return (
    <>
      <div className="bg-red-600 rounded-bl-md flex px-12 justify-between">
        <Menu menu="Home" link="/"/>
        <Menu menu="Service" link="/service"/>
        <Menu menu="Portofolio" link="/portofolio"/>
        <Menu menu="About" link="/about"/>
        <Menu menu="Connect" link="/connect"/>
      </div>
    </>
  );
}
