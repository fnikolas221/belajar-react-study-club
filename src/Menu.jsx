import { NavLink } from "react-router-dom";

export default function Menu(props) {
  return (
    <>
      <NavLink
        to={props.link??"/"}
        className={({isActive})=>{
          let kelas_awal = "pr-3 py-3";
          return isActive? "text-black "+kelas_awal : kelas_awal;
        }}
      >
        {props.menu}
      </NavLink>
    </>
  );
}
