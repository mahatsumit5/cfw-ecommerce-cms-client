import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { Button, Container, Dropdown, Form, Row } from "react-bootstrap";
import { CustomeTable } from "../../components/table/CustomeTable";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductAction,
  getproductAction,
  updateProductAction,
} from "../../Action/productAction";
import { setDisplayTable } from "../../redux/displaySlice";

export const Products = () => {
  let btnName = "";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [button, setButton] = useState({
    btnName,
    isActive: false,
  });
  const { product } = useSelector((state) => state.productsData);
  const { catalogue } = useSelector((store) => store.catagoryInfo);

  useEffect(() => {
    dispatch(setDisplayTable(product));
    !product.length && dispatch(getproductAction());
  }, [dispatch, product]);
  const handleOnDelete = (id) => {
    dispatch(deleteProductAction(id));
  };
  const handleOnEdit = (id) => {
    navigate(`/products/edit/${id}`);
  };
  const handleOnClick = (e) => {
    const { value } = e.target;
    setButton({ btnName: value, isActive: true });

    if (value !== "all") {
      const getCatalogue = catalogue.filter((item) => {
        return item.title.toLowerCase().includes(value.toLowerCase());
      });
      const filteredItems = product.filter((item) => {
        return item.parentCat.toLowerCase().includes(getCatalogue[0]._id);
      });
      dispatch(setDisplayTable(filteredItems));
      return;
    }
    dispatch(setDisplayTable(product));
  };
  const handleToggleChange = (e) => {
    const { value, checked } = e.target;
    dispatch(
      updateProductAction({
        _id: value,
        status: checked ? "active" : "inactive",
      })
    );
  };
  const column = [
    { heading: "STATUS", value: "status" },
    { heading: "SKU", value: "sku" },
    { heading: "THUMBNAIL", value: "thumbnail" },
    { heading: "NAME", value: "title" },
    { heading: "Price", value: "price" },
    { heading: "STOCK", value: "qty" },
  ];

  return (
    <AdminLayout title="Products">
      <div className="w-100 mt-2 p-3  rounded  shadow ">
        <div className=" d-flex justify-content-between flex-wrap">
          <span>
            {" "}
            <h3 className="font-monospace">List of Products </h3>
            <p className="text-secondary">{product?.length} products found</p>
          </span>
          <Link to="/new-product">
            <Button variant="primary">Add Products</Button>
          </Link>
        </div>
        <div className="mt-2 text-body-secondary d-flex gap-3 flex-wrap">
          {catalogue.map((item, i) => (
            <Button
              key={i}
              variant=""
              active={
                button.btnName === item.title && button.isActive === true
                  ? true
                  : false
              }
              onClick={handleOnClick}
              value={item.title}
            >
              {item.title}
            </Button>
          ))}
          <Button
            variant=""
            active={
              button.btnName === "all" && button.isActive === true
                ? true
                : false
            }
            onClick={handleOnClick}
            value="all"
          >
            All Products
          </Button>
        </div>

        {/* <div className="mt-2 text-body-secondary d-flex gap-5 justify-content-between">
          <div>
            <Form.Control placeholder="Search a product" />
          </div>
          <div className="d-flex gap-2 ">
            <Dropdown variant="primary">
              <Dropdown.Toggle id="" variant="primary">
                Sort by
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown variant="primary">
              <Dropdown.Toggle id="" variant="primary">
                Filter by
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div> */}
      </div>
      {product?.length ? (
        <CustomeTable
          column={column}
          handleOnDelete={handleOnDelete}
          handleOnEdit={handleOnEdit}
          handleToggleChange={handleToggleChange}
        />
      ) : (
        <h1 className="" style={{ color: "red" }}>
          No Products Available
        </h1>
      )}
    </AdminLayout>
  );
};
