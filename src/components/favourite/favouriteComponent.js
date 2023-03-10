import FavouriteWord from "./favouriteWord"

const FavouriteComponent = ({favouriteList , removeFavourite}) => {

    const favouriteMapped = favouriteList.map((data,index) => {
     return( <FavouriteWord word={data.word} defintions={data.defintions} removeFavourite={removeFavourite} index={index} key={index}/> )
 
    })
 
     return(
        
        <div>
             {favouriteMapped}
        </div>
     )
 
 }
 
 
 export default FavouriteComponent;