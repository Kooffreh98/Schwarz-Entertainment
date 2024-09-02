import "./topsection/section1.scss"

export default function Heading(props) {
    return (
        <div className="items-center py-8 head-div">
           <h2 className={`heading font-semibold text-xl text-center ${props.className}`}>
             {props.text}
           </h2>
        </div>
        
    );
};