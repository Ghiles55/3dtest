import { motion } from "framer-motion"


const Input=(props)=>{
    return(
        <>
        <label htmlFor={props.id}>{props.label}</label>
        <motion.input
        className={props.class||"input_form"}
        id={props.id}
        type={props.type}
        name={props.id}
        onBlur={props.onBlur}
        {...props}
        />
        </>
    )
}

export default Input