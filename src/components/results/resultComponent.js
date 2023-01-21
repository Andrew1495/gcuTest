import ResultNode from "./resultNode";

const ResultComponent = ({searchResult, addFavourite}) => {
    let nounArray =[];
    let adjectiveArray =[];
    let verbArray =[];




    // sorting the result data into Nouns, Verbs and Adjectives to display to user
const sortBypartOfSpeech = () => {
   

    for (let index = 0; index < searchResult.length; index++) {
        const element = searchResult[index];

        for (let i = 0; i < element.data.meanings.length; i++) {
            const def = element.data.meanings[i];
            
            if(def.partOfSpeech === 'noun'){
                let a = def.definitions
                    a.forEach(element => {
                    nounArray.push(element)});
            }if(def.partOfSpeech === 'verb'){
                let b = def.definitions
                    b.forEach(element => {
                    verbArray.push(element)});
            }if (def.partOfSpeech ==='adjective') {
                let c = def.definitions
                    c.forEach(element => {
                    adjectiveArray.push(element)});
            }
        }   
}

}
sortBypartOfSpeech()

return(
        <>
        {nounArray.length ?
            <div>
                <h3>Noun:</h3>
                <ResultNode array={nounArray} word={searchResult[0].data.word}type='noun' addFavourite={addFavourite} />
            </div>
        : null}

        {verbArray.length ?
            <div>
                <h3>Verb:</h3>
                <ResultNode array={verbArray} word={searchResult[0].data.word} type='verb' addFavourite={addFavourite} />
            </div>
        : null}

        {adjectiveArray.length ?
            <div>
                <h3>Adjective:</h3>
                <ResultNode array={adjectiveArray}word={searchResult[0].data.word}type='adjective' addFavourite={addFavourite} />
            </div>
        : null}
        </>

    )

}

export default ResultComponent;