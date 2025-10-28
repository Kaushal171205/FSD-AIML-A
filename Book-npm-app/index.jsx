
import ReactDOM from "react-dom/client";
function Book(){
    return (
        <div>
            <img src="" width="200" height="200" alt="Book Image" />
            <h3>Title : Physics</h3>
            <h4>Price : ₹381/-</h4>
        </div>
    );
}
const parent = document.getElementById("root")
const root = ReactDOM.createRoot(parent)
root.render(<Book/>)