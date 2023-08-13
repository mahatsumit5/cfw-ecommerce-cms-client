import { useDispatch, useSelector } from "react-redux";
import { setDisplayTable } from "../../redux/displaySlice";
import { useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";

export const SearchBar = () => {
  const { pathname } = useLocation();
  const { catalogue } = useSelector((store) => store.catagoryInfo);
  const { paymentOptions } = useSelector((store) => store.payments);
  const { product } = useSelector((state) => state.productsData);

  const dataForSearchBar = () => {
    if (pathname === "/catalogue") {
      return catalogue;
    }
    if (pathname === "/payment") {
      return paymentOptions;
    }
    if (pathname === "/products") {
      return product;
    }
  };
  // if (pathname === "/products") {
  //   return product;
  // }

  const data = dataForSearchBar();
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const { value } = e.target;
    const filteredItems = data?.filter((item) => {
      return item && item?.title?.toLowerCase().includes(value?.toLowerCase());
    });
    filteredItems && dispatch(setDisplayTable(filteredItems));
  };
  return (
    <div>
      <Form.Control
        size="md"
        type="text"
        placeholder="Search your title"
        onChange={handleOnChange}
      />
    </div>
  );
};
