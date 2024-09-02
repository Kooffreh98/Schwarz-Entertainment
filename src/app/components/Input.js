import Image from "next/image";
import "./comp.scss";


const Input = (props) => {
    return (
        <form className="input-button-wrapper">
            <input type={props.type} name={props.name} 
             placeholder={props.placeholder} value={props.value}
             onChange={props.onChange} 
             className={`bg-gray-200 rounded-md py-2 px-4 text-black ${props.className}`}
            />

            <button type="submit" className="bg-gray-200 rounded-md py-2 px-2 hover:bg-black">
              <Image className="" src="/images/send.svg" alt="send icon" width={19} height={59}/>
            </button>
        </form>
    );
};


export default Input ;