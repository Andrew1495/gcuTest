const ResultCard = ({def, type, word, addFavourite}) => {
  
    const handleClick = () => {
        addFavourite(type,def,word)
    }
    
    return (
    <>
        <p>{def}</p>
        <button onClick={handleClick} value={def}>Favourite</button>
    </>
    
    
    )
    
    }
    
export default ResultCard;   