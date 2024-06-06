import Midtrans from "midtrans-client";

let snap = new Midtrans.Snap({
    isProduction : false,
    serverKey : "SB-Mid-client-cdyZkykojyo8-Ddl",
    clientKey : "SB-Mid-server-25A4V322p8Pg--nQctht6Rh8"
})

export async function POST(request) {
    const {id, productName, price, quantity} = await request.json()
}