import {Card, CardContent, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {CouponModel} from "../../../Models/CouponModel";
import companyService from "../../../Services/CompanyService";
import notificationService from "../../../Services/NotificationService";
import "./CompanyCouponPage.css";
import CouponDetailsPage from "./CouponDetailsPage/CouponDetailsPage";

function CompanyCouponPage(): JSX.Element {
    const [coupon, setCoupon] = useState<CouponModel | undefined>(undefined);
    const navigate = useNavigate();
    const params = useParams();
    const id = +params.id;

    useEffect(() => {
        companyService
            .getOneCoupon(id)
            .then((coupon) => setCoupon(coupon))
            .catch((err) => notificationService.error(err));
    }, []);

    return (
        <div className="CompanyCouponPage">
            <CouponDetailsPage coupon={coupon}/>

        </div>
    )
}

export default CompanyCouponPage;