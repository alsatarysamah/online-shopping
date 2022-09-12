import postAPI from "../../hooks/postAPI";
import { LoginContext } from "../../context/login";
import { useContext } from "react";
import { ItemContext } from "../../context/item";
import updateAPI from "../../hooks/updateAPI";
import "./updateForm.css"
 
export default function UpdateForm(props) {
  const loginContext = useContext(LoginContext);
  const itemContext = useContext(ItemContext);
  const updateItem = (e, id) => {
   
    e.preventDefault();
   
    let name = e.target.name.value;
    let description = e.target.description.value;
    let price = parseFloat(e.target.price.value);
    let url = e.target.url.value;
    let item = {
      description: description,
      price: price,
      imgUrl: url,
      userId: loginContext.user.id,
    };
    // console.log(loginContext.user);
    
    updateAPI(item,loginContext.user.token,itemContext.item,isNaN(parseFloat(item.price)));
    e.target.reset();
    e.target.name.focus();
  };
  return (
    <>
      <div>
        <h4>Create an Item</h4>
        <form id="update" className="loginForm" onSubmit={updateItem}>
          <h3>Update Form</h3>
          <div className="input-container">
            
            <label>
              Item name:
              </label>
            <input type="text" name="name"  />
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
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </>
  );
}
