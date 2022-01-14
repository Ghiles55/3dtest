import { motion } from "framer-motion"


const Input=(props)=>{
    return(
        <>
        <label htmlFor={props.id}>{props.label}</label>
        <motion.input
        className={props.class||"input_form"}
        id={props.id}
        type={props.type}
        {...props}
        />
        </>
    )
}

export default Input