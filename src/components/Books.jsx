// JSX is stricter than HTML. 

export const favBooks = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" },
]


const BookList = ({ books }) => {
    return (
        <ul>
            {books.map((book) => (
                <li key={book.id}>{book.name}</li>
            ))}
        </ul>
    );
}

export default BookList

