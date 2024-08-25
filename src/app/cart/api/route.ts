// "use server";

import { ApiError, Tranzakt } from "tpp-node-sdk";

export async function POST(request: Request) {  
  const tranzakt = new Tranzakt(process.env.API_KEY ?? '');
  try {
    const req: { amount: number } = await request.json();    
    const payload = {
      collectionId: process.env.COLLECTION_ID ?? '',
      title: "Test Invoice",
      payerName: "John Doe",
      payerEmail: "john.doe@example.com",
      payerPhoneNumber: "07061011343",
      amount: req.amount,
      invoiceBeneficiaries: [
        {
          linkedAccountId: process.env.LINKED_ACCOUNT_ID ?? '',
          amount: req.amount,
        },
      ],
    }
    console.log(payload, "payload");
    
    const res = await tranzakt.createInvoice(payload);
    console.log(res, "res");
    
    return Response.json(res);
  } catch (error) {
    let err = error as ApiError;
    return new Response(err.message, err);
  }
}
