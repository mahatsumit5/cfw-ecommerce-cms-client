import { useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductAction,
  getproductAction,
} from "../../Action/productAction";
import { Link } from "react-router-dom";

export const ProductTable = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productsData);
  useEffect(() => {
    dispatch(getproductAction());
  }, [dispatch]);

  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between mb-3"></div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>QTY</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img
                  src={
                    process.env.REACT_APP_ROOTSERVER + item.thumbnail?.slice(6)
                  }
                  alt="img"
                  width="150px"
                />
              </td>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>
                <Link to={`/products/edit/${item._id}`}>
                  <Button variant="warning">Edit</Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteProductAction(item._id))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
