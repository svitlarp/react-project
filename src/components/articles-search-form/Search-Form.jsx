import { SiOpensearch } from "react-icons/si";


export const SearchForm = ({onSearch}) => {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        console.dir(form);
        const article = form.elements.article.value;
        onSearch(article);
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"  name="article" className="article-search-form" placeholder="Search articles..." />
            <button>Search</button>
        </form>
    )
}
export default SearchForm;


