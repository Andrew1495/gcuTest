const SearchComponent = ({keyword, onChange, onSubmit}) =>{

    return(
        <form onSubmit={onSubmit}>
            <input key='search-bar'
            value={keyword}
            spellCheck='true'
            placeholder='search defintion'
            onChange={(e) => onChange(e.target.value)}
            />
            <input classname="submit" type="submit" value="Search" id="Search"/>
        </form>
    );
    
    
    
    }
    
    export default SearchComponent;