import FavouriteCard from "./favouriteCard"
const FavouriteWord = ({word, defintions, index, removeFavourite}) => {

    const mappedFavDefs = defintions.map((data, i) => {
        return( <FavouriteCard defintion={data.defintion} type={data.type} key={i} i={i} parentKey={index} removeFavourite={removeFavourite}/> )

    })


return(

    <>
        <h3>
            {word}
        </h3>

        <ul>
            {mappedFavDefs}
        </ul>
    </>
)





}

export default FavouriteWord;