
import postAPI from "../../hooks/postAPI";
import { LoginContext } from "../../context/login";
import { useContext } from "react";
export default function UpdateForm(props) {
    const loginContext=useContext(LoginContext);
  const updateItem = (e,id) => {
    console.log("user  ",loginContext.user);
    // postAPI(item,loginContext.user.token);
    console.log("submit");
    e.preventDefault();
    // let name;
    // if(e.target.name.value) name = e.target.name.value;
    let description = e.target.description.value;
    let price = parseFloat(e.target.price.value);
    let url = e.target.url.value;
    let item = {
    
      description: description,
      price: price,
      imgUrl: url,
      userId:loginContext.user.id
    };
    // console.log(loginContext.user);
    // updateAPI(item,loginContext.user.token,id);
    e.target.reset();
    e.target.name.focus();
  };
  return (
    <>
      <div>
        <h4>Create an Item</h4>
        <form onSubmit={updateItem}>
          <div className="input-container">
            <label>
              Item name:
              https://github.com/mahmud-sajib/ecommerce-store-product-data/blob/master/t-shirt2.jpg?raw=true{" "}
            </label>
            <input type="text" name="name" required />
            {/* {renderErrorMessage("uname")} */}
          </div>
          <div className="input-container">
            <label>Description </label>
            <input type="text" name="description" />
            {/* {renderErrorMessage("pass")} */}
          </div>
          <div className="input-container">
            <label>Price </label>
            <input type="text" name="price" />
            {/* {renderErrorMessage("pass")} */}
          </div>
          <div className="input-container">
            <label>Image URL </label>
            <input type="text" name="url" />
           
          </div>
          <div className="button-container">
            {/* <input type="submit" onClick={handleSubmit} /> */}
            <button type="submit" >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
