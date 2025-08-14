import axios from "axios";
import { useEffect, useState } from "react";
import LoaderHourglass from "./components/Loader";




function ArticleList({items}) {
    return (
        <ul className="articleList">
            {items.map(({ objectID, title, url }) => (
                <li key={objectID}>
                    <a href={url} target="_blanc" rel="noreferrer nooopener">
                        {title}
                    </a>
                </li>
            ))}
        </ul>
    );
}

//Зверніть увагу, що умовний рендерінг відбувається в батьківському компоненті App. 
export default function App() {
    const [articles, setArticles] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        async function fetchArticles() {
            try {
                setloading(true);
                const response = await axios.get('https://hn.algolia.com/api/v1/search?query=react');
                console.log(response.data.hits);
                setArticles(response.data.hits);
            }
            catch (err) {
                console.log(err);
            }
            finally {
                setloading(false);
            }
        }
        fetchArticles();
    }, []);

    return (
        <div>
            <h1>Latest News</h1>
            {loading && <LoaderHourglass />}
            {articles.length > 0 && <ArticleList items={articles} />}  
        </div>
    );    
}

