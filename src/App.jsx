import { useState, useEffect } from "react";
import LoaderHourglass from "./components/Loader";
import { fetchArticlesWithTopic } from "./components/apis/articles-api.js";
import SearchForm from "./components/articles-search-form/Search-Form.jsx";
import { LangSwitcher } from "./components/LangSwitcher.jsx";
import Button from "./components/Button.jsx";
import LightSwitch from "./components/LightSwitch.jsx";
import ColorSwitch from "./components/ColorSwitch.jsx";
import RadioButton from "./components/RadioButton.jsx";
import CheckBox from "./components/CheckBox.jsx";


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
    const [error, setError] = useState(false);
    const [lang, setLang] = useState("fr");
    const [coffeeSize, setCoffeeSize] = useState("S");
    const [hasAccepted, sethasAccepted] = useState(false);

    const handleSearch = async (keySearch) => {
        try {
            setloading(true);
            const data = await fetchArticlesWithTopic(keySearch);
            setArticles(data);
        }
        catch (error) {
            setError(error);
        }
        finally {
            setloading(false);
        }
    }


    const handleChangeColor = () => {
        // let bodyStyle = document.body.style;
        if (document.body.style.backgroundColor === "white") {
            document.body.style.backgroundColor = "pink";
        } else {
            document.body.style.backgroundColor = "white";
        }
    } 

    const handleSizeChange = (evt) => {
        setCoffeeSize(evt.target.value);
    }


    const handleChangeCheckbox = (evt) => {
        console.dir(evt.target.checked);
        sethasAccepted(evt.target.checked);
    }

    // useEffect(() => {
    //     async function fetchArticles() {
    //         try {
    //             setloading(true);
    //             // const response = await axios.get('https://hn.algolia.com/api/v1/search?query=react');
    //             // Навіть в такому простому випадку ми приховали від компонента адресу запиту та специфіку відповіді.
    //             // Компонент лише викликає функцію і передає їй ключове слово пошуку статей.
    //             const data = await fetchArticlesWithTopic('react');
    //             console.log(data);
    //             setArticles(data);
    //         }
    //         // TODO Error handling does not work
    //         catch (error) {
    //             setError(true);
    //         }
    //         finally {
    //             setloading(false);
    //         }
    //     }
    //     fetchArticles();
    // }, []);

    return (
        <div>
            {/* <Counter /> */}
            <SearchForm onSearch={handleSearch} />
            <p>{lang}</p>
            <LangSwitcher value={lang} onSelect={setLang} />
            <LightSwitch />
            <ColorSwitch onChangeColor={handleChangeColor}/>
            
            <RadioButton size={coffeeSize} onSizeChange={handleSizeChange} />
            <CheckBox checkboxTerms={hasAccepted} onChangeTerms={handleChangeCheckbox} />

            <h1>Latest News</h1>
            {loading && <LoaderHourglass />}
            {error && (
                <p>Whoops... Something went wrong! Please try reload this page.</p>
            )}
            {articles.length > 0 && <ArticleList items={articles} />}  
        </div>
    );    
}


// function Counter() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setTimeout(() => {
//       setCount(count + 1);
//     }, 2000);
//   }

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={handleClick}>+1 after 2s</button>
//     </div>
//   );
// }


