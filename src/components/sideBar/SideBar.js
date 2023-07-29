import React from "react";
import { Link } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BsFillBox2Fill } from "react-icons/bs";
import { LiaCreditCardSolid, LiaTruckSolid } from "react-icons/lia";
import { FaMoneyBillAlt, FaUserSecret } from "react-icons/fa";
export const SideBar = () => {
  return (
    <div className="side-bar bg-dark text-light">
      <p className="mt-3 text-center">Admin Panel</p>
      <hr></hr>
      <nav>
        <ul className="list-unstyled side-nav">
          <li className="mt-2">
            <Link to="/dashboard" className="nav-link">
              <TbLayoutDashboard className="fs-2" /> Dashboard
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/profile" className="nav-link">
              <CgProfile className="fs-2" /> Profile
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/products" className="nav-link">
              <BsFillBox2Fill />
              Products
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/customers" className="nav-link">
              <FaUsers className="fs-2" />
              Customers
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/sales" className="nav-link">
              <FaMoneyBillAlt /> Sales
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/catalogue" className="nav-link">
              <BiSolidCategoryAlt />
              Catalogue
            </Link>
          </li>

          <li className="mt-2">
            <Link to="/payment" className="nav-link">
              <LiaCreditCardSolid /> Payment
            </Link>
          </li>

          <li className="mt-2">
            <Link to="/orders" className="nav-link">
              <LiaTruckSolid />
              Orders
            </Link>
          </li>
          <hr></hr>
          <li className="mt-2">
            <Link to="/admin" className="nav-link">
              <FaUserSecret />
              Admin Users
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
