import {Card, CardMedia, CardContent, Typography, Link} from "@mui/material";
import {CouponModel} from "../../../Models/CouponModel";
import { useNavigate } from "react-router-dom";
import "./CouponCard.css";

interface CouponProps {
    coupon: CouponModel
}

function CouponCard(props: CouponProps): JSX.Element {

    const navigate = useNavigate();

    function CouponPage() {
        navigate("/CouponPage/" + props.coupon.id)
    }

    return (
        <div className="CouponCard">
            <Card sx={{maxWidth: 200, maxHeight: 600}}>
                 <CardMedia
                    component="img"
                    height="200"
                    width="200"
                    alt={props.coupon?.title + "image"}
                    image={(props.coupon?.image)}/>
                <CardContent sx={{maxHeight: 150}}>
                    <Typography gutterBottom variant="h6" component="div">
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
                </CardContent>
                <Link className="left-button" color="inherit" onClick={CouponPage} component="button"
                      underline="hover">MORE</Link>
            </Card>
        </div>
    );
}

export default CouponCard;
