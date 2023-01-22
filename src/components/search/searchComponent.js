const SearchComponent = ({onChange, onSubmit}) =>{

    return(
        <form onSubmit={onSubmit}>
            <input key='search-bar'
            spellCheck='true'
            placeholder='search defintion'
            onChange={(e) => onChange(e.target.value)}
            />
            <input className="submit" type="submit" value="Search" id="Search"/>
        </form>
    );
    
    
    
    }
    
    export default SearchComponent;