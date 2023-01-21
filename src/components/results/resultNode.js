const ResultNode = ({array, type, word}) => {

    const mappedArray = array.map((def, index) => {
        return <ResultCard def={def.definition} word={word} type={type} key={index}/> 
    })


    return(
        <ul>
            {mappedArray}
        </ul>
    )
}


export default ResultNode;