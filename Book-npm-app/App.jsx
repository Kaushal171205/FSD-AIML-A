
const App = () => {
 
 
    const bookjson=[
        {
            "title": "Physics",
            "price": "₹324/-",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_vuIWdS4z5Somcctla6_8buv6GTlsaZjOL8yQrvC_glExnt_M3Qrm0s&s"
        },
        {
            "title": "Chemistry",
            "price": "₹299/-",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_vuIWdS4z5Somcctla6_8buv6GTlsaZjOL8yQrvC_glExnt_M3Qrm0s&s"
        },
        {
            "title": "Mathematics",
            "price": "₹350/-",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_vuIWdS4z5Somcctla6_8buv6GTlsaZjOL8yQrvC_glExnt_M3Qrm0s&s"
        }
    ]
return (
    <div className="book-list">
        {
            bookjson.map((book, idx) => (
                <div className="card" key={idx}>
                    <img 
                        src={book.image} 
                        width="250" 
                        height="250" 
                        alt={book.title + " Book Image"} 
                    />
                    <h4>Title: {book.title}</h4>
                    <h3>Price: {book.price}</h3>
                    <button>Add To cart</button>
                </div>
            ))
        }
    </div>
)           
}
export default App