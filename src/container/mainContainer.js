import SearchComponent from '../components/search/searchComponent';
import ResultComponent from '../components/results/resultComponent';
import FavouriteComponent from '../components/favourite/favouriteComponent';
import { getDictionaryResults } from '../service/dictonaryService';
import {useState, useEffect}  from 'react';


const MainContainer = () => {

    const [keyword, setKeyword] = useState();
    const [searchResult, setSearchResult] = useState();
    const [error, setError] = useState(false)
    const [favouriteList, setFavouriteList] = useState([])

    // sets favouriteList from local storage
    useEffect(() => {
        // localStorage.clear()      
        const favList = JSON.parse(localStorage.getItem('favouriteList'));
        if (!favList) {
            setFavouriteList([])
        }
        // had problem deleting last entry in favList
        else if (favList.length === 1 && favList[0].defintions.length === 0) {
         setFavouriteList([])
        }else if(favList){
            setFavouriteList(favList)
        }
      }, []);


    // handles updating of word to be used in search 
    const updateKeyword = (keyword) => {
        setKeyword(keyword.toLowerCase())
    }
    
// calls getDictionaryResults to search api if it fails set error to false to let user know
const searchDefintion = (e) =>{
    e.preventDefault();
        getDictionaryResults(keyword).then(result => {
        if(result){
        const succesfulResults = result.map(data => {
            return{data}
        }) 
    setSearchResult(succesfulResults)
    setError(false)
    }
    else{
        setError(true)
    }

})
}

// handles adding defintion to favList, sorted by word and no duplicate definitions
const addFavourite = (type ,def, word ) => {
    let foundDef = false
    let foundWord = false
    let arrayOfFavs = [...favouriteList];
    for (let index = 0; index < arrayOfFavs.length; index++) {
        const element = arrayOfFavs[index];
            if (element.word === word) {
                foundWord = true;
                }
            if(foundWord){
                for (let index = 0; index < element.defintions.length; index++) {
                    const e = element.defintions[index];
                    if (e.defintion === def) {
                        foundDef = true;
                    }
                }
                if(!foundDef){
                    element.defintions.push({type: type, defintion: def})
                }
            }
                
            }
              
    if(!foundWord){
        arrayOfFavs.push({word: word , defintions:[{type: type, defintion: def}]})
    }else{
        
    }
   
   
    setFavouriteList(arrayOfFavs)
    localStorage.setItem('favouriteList',JSON.stringify(favouriteList));
}


// doesn't remove the last entry fixed for now through use effect
const removeFavourite = (i,j)=>{
    let arrayOfFavs = [...favouriteList];
    arrayOfFavs[i].defintions.splice(j,1)
    if (arrayOfFavs[i].defintions.length === 0) {
        arrayOfFavs.splice(i,1)
    }
    setFavouriteList(arrayOfFavs)
    
    setFavouriteList(arrayOfFavs)
    localStorage.setItem('favouriteList', JSON.stringify(favouriteList));
}


    return(
        <>
        <div className='header'>
            
            <div className='search'>
                    <h1>Words.</h1>
                    <SearchComponent keyword={keyword} onChange={updateKeyword} onSubmit={searchDefintion}/>
                    {error ? <p className='error'>Check spelling of word</p> : null}
            </div>
        </div>

            <div className='flex-container'>


                <div className='display'>
                    { searchResult?
                    <div>
                        <h2>Definitions</h2>
                        <ResultComponent searchResult = {searchResult} addFavourite={addFavourite} /> 
                    </div>
                    : null }
                </div>

                <div className='display'>
                
                    {favouriteList.length ?
                    <div>
                        <h2>Favourites</h2>
                        <FavouriteComponent favouriteList={favouriteList} removeFavourite={removeFavourite}/>
                    </div>
                    : null }
                </div>
            </div>
        </>

        )

}
export default  MainContainer;