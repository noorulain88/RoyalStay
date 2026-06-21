const Button=({children,handleClick,classes})=>{
    return <button onClick={handleClick} className={classes}>
        {children}
        </button>
}
export default Button


