import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Social(props) {
  return (
    <>
      <a href={`https:\\${props.link}`}>
        <div className="w-20 text-center bg-gray-600 text-white py-8 rounded-md">
          <FontAwesomeIcon icon={props.icon}/>
        </div>
      </a>
    </>
  );
}
