import { useDispatch, useSelector } from "react-redux";
import { setDisplayTable } from "../../redux/displaySlice";
import { useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
  ];
  return (
    <div>
      <Autocomplete
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            variant="outlined"
            type="text"
            placeholder="Search.."
            onChange={handleOnChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
};
