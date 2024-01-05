import Socials from "./Socials";

export default function Bio() {
  return (
    <>
      <div className="text-4xl font-bold">
        Hai Saya Fernando <br />
        Web Developer
      </div>
      <div className="pt-8 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nostrum
        velit, vitae enim voluptate saepe et expedita minus dolores consequuntur
        necessitatibus eaque sequi molestiae aspernatur non fugiat natus?
        Magnam, harum!
      </div>
      <div className="mt-10">
        <Socials />
      </div>
    </>
  );
}
