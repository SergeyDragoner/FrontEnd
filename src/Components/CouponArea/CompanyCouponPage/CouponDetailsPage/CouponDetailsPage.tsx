import "./CouponDetailsPage.css";
import {Card, CardContent, Typography} from "@mui/material";
import {CouponModel} from "../../../../Models/CouponModel";
import {useNavigate, useParams} from "react-router-dom";
import companyService from "../../../../Services/CompanyService";
import notificationService from "../../../../Services/NotificationService";
import {couponStore, deleteCouponAction} from "../../../../Redux/CouponState";

interface CardContent {
    coupon: CouponModel;
}

function CouponDetailsPage(props: CardContent): JSX.Element {
    const id = +useParams().id!;
    const navigate = useNavigate();

    function back() {
        navigate("/CompanyCoupons");
    }

    function deleteCoupon() {
        if (window.confirm("ARE YOU SURE?")) {
            couponStore.dispatch(deleteCouponAction(id));
            companyService.deleteCoupon(id)
                          .then(() => {
                                 navigate("/CompanyCoupons");
                                 notificationService.success("DELETED!");
                })
                          .catch((err) => notificationService.error(err));
        }

    }

    function edit() {
        navigate("/UpdateCoupon/" + id);
    }

    return (
        <div className="CouponDetailsPage">
            <Card sx={{maxWidth: 800, maxHeight: 8000}}>
                <CardContent sx={{maxHeight: 1000}}>
                    <Typography gutterBottom variant="h4" component="div">
                        {props.coupon?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.coupon?.description}
                    </Typography>
                    <Typography variant="body2">
                        PRICE: ${props.coupon?.price}
                    </Typography>
                    <Typography variant="body2">
                        CATEGORY: {props.coupon?.category}
                    </Typography>
                    <Typography variant="caption">
                        <>
                            End Date: {props.coupon?.endDate}
                        </>
                    </Typography>
                    <Typography id="detailImage" variant="body2">
                        {props.coupon?.image && <img src={props.coupon.image} alt={props.coupon.description}/>}
                    </Typography>
                    <div className={"buttonsContainer"}>
                        <div className={"deleteButtonCoupon"}>
                            <button id={"deleteCoupon"} onClick={deleteCoupon}>
                                Erase
                            </button>
                        </div>
                        <div className={"editButtonCoupon"}>
                            <button id={"editCoupon"} onClick={edit}>
                                Modifier
                            </button>
                        </div>
                    </div>

                </CardContent>
            </Card>
            <div id={"backButton"}>
                <button onClick={back}>Back</button>
            </div>
        </div>
    );
}

export default CouponDetailsPage;
