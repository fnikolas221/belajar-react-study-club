export default function Message(props){
    return (<>
        <div className="w-40 px-5 py-5 bg-gray-500 text-white opacity-55">
            {props.isi}
        </div>
    </>);
}