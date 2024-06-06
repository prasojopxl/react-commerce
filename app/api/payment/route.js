import Midtrans from "midtrans-client";
import {NextResponse} from "next/server"
import _ from "lodash";

export function GET() {
    return NextResponse.json({
        message:"hello"
    })
}

let snap = new Midtrans.Snap({
    isProduction : false,
    serverKey : process.env.SERVER_KEY,
    clientKey : process.env.NEXT_PUBLIC_CLIENT_KEY
})


export async function POST(req) {
    const data = await req.json()
    if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Invalid input data');
    }
    const itemDetails = data.map((item) => {
        return {
            key: item.id,
            id: item.id,
            name: item.name,
            price: parseInt(`${item.price}`),
            quantity: item.quantity,
        }
    })
    const grossAmount = _.sumBy(itemDetails, (item) => item.price * item.quantity)

    const parameter = {
        item_details:[itemDetails],
        transaction_details: {
            order_id:_.random(1, 9999) + _.now(),
            gross_amount: grossAmount
        }
    }
    const token = parameter && await snap.createTransactionToken(parameter)
    return NextResponse.json({token})
}

