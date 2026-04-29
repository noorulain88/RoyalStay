const Button=({children,handleClick,classes})=>{
    return <button onClick={handleClick} className={classes}>
        {children}
        </button>
}
export default Button


// const sayHello=()=>{
//     console.log("hello")
// }

{/* <button onClick={sayHello}>submit</button> */}

// <Button handleClick={sayHello}>Submit</Button>




// const delete=()=>{
//     console.log("delelte")
// }
// <Button handleClick={delete}>Delete</Button>