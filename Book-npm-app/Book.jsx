

const Book = ({ title, price, image }) => {
    return (
        <div className="card">
            <img src={image} alt={title + " Book Image"} width="250" height="250" />
            <h4>Title: {title}</h4>
            <h3>Price: {price}</h3>
            <button>Add To cart</button>
        </div>
    )
}

export default Book