import { useState, useEffect } from "react";
import { CouponModel } from "../../../Models/CouponModel";
import CustomerModel from "../../../Models/CustomerModel";
import customerService from "../../../Services/CustomerService";
import notificationService from "../../../Services/NotificationService";
import CouponCard from "../../CouponArea/CouponCard/CouponCard";
import "./CustomerDetails.css";
import { Link, useNavigate } from "react-router-dom";

function CustomerDetails(): JSX.Element {
  const [currentUser, setCustomer] = useState<CustomerModel>();
  const [customerCoupons, setCustomerCoupons] = useState<CouponModel[]>();
  const navigate = useNavigate();

  useEffect(() => {
    customerService
      .getCustomerDetails()
      .then((customer) => {
        setCustomer(customer);
        setCustomerCoupons(customer.coupons);
      })
      .catch((err) => notificationService.error(err));
  }, []);

  function goBackHome() {
    navigate("/home"); // Navigate to the /home route
  }

  return (
    <div className="CustomerDetails">
      <div>
        {currentUser != null && (
          <div>
            <h3 className="name">
              {"NAME: " + currentUser.firstName + " " + currentUser.lastName}
            </h3>
            <h4 className="email">{"EMAIL: " + currentUser.email}</h4>
            {customerCoupons &&
              customerCoupons.map((c) => (
                <span className="Card" key={c.id}>
                  <CouponCard key={c.id} coupon={c} />
                </span>
              ))}
          </div>
        )}
      </div>
      <div className="button-container">
        <button className="back-button" onClick={goBackHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default CustomerDetails;
