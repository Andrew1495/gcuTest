const FavouriteCard = ({defintion, i, parentKey ,type, removeFavourite}) => {
 
    const handleClick = () => {
        removeFavourite(parentKey,i)
    }

return(


    <>
    <p>{type}</p>
    <p>{defintion}</p>
    <button onClick={handleClick}>Remove</button>
    
    </>

)



}

export default FavouriteCard;