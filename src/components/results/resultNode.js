import ResultCard from "./resultCard"

const ResultNode = ({array, type, word , addFavourite}) => {

    const mappedArray = array.map((def, index) => {
        return <ResultCard def={def.definition} word={word} type={type} key={index} addFavourite={addFavourite}/> 
    })


    return(
        <ul>
            {mappedArray}
        </ul>
    )
}


export default ResultNode;