export const SearchLikeForm = ({placeholder}) =>{
    return(
        <form className="search card comp-s flex j-sb">
        <input type="text" placeholder={placeholder}/>
        <label htmlFor="submit">
            <img src="/icons/search.svg" alt=""/>
        </label>
        <input id="submit" type="submit" value=""/>
    </form>
    )
}