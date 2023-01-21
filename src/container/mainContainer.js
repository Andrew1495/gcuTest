import SearchComponent from '../components/search/searchComponent';
import { getDictionaryResults } from '../service/dictonaryService';
import {useState, useEffect}  from 'react';


const MainContainer = () => {

    const [keyword, setKeyword] = useState();
    const [searchResult, setSearchResult] = useState();
    const [error, setError] = useState(false)
    const [favouriteList, setFavouriteList] = useState([])


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


    return(
            <>
            <div>
                <SearchComponent keyword={keyword} onChange={updateKeyword} onSubmit={searchDefintion}/>
                {error ? <p>Check spelling of word</p> : null}
            </div>

            { searchResult?
            <div>
                <h2>Definitions</h2>
                <ResultComponent searchResult = {searchResult} /> 
            </div>
            : null }
            </>

        )

}
export default  MainContainer;