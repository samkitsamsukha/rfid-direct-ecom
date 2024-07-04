import { loadStripe } from "@stripe/stripe-js";

export async function checkout(){
    let stripepromise = null;
    let getstripe = () => {
        if(!stripepromise){
            loadStripe(process.env.NEXT_PUBLIC_API_KEY)
        }
    }
}