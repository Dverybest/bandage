// "use server";

import { ApiError, Tranzakt } from "tpp-node-sdk";

export async function POST(request: Request) {
  const tranzakt = new Tranzakt(
    "MHcCAQEEIDqzFOFfjtXk2tgJ+hsg2CRw32T2sO8tnIbsqCSgVgWHoAoGCCqGSM49AwEHoUQDQgAE7cSLTdwjxvtw4EJQQES5OPCcLrtvS5VJIMYAXnbBOZZVKSGtDONYm663OH6wyhS03FjQlmQrPdeZFYRkFZaKhA=="
  );
  try {
    const req: { amount: number } = await request.json();
    const res = await tranzakt.createInvoice({
      collectionId: "592a6a8b-c044-40f6-afd9-ce671588bde1",
      title: "Test Invoice",
      payerName: "John Doe",
      payerEmail: "john.doe@example.com",
      payerPhoneNumber: "07061011343",
      amount: req.amount,
      invoiceBeneficiaries: [
        {
          linkedAccountId: "929f6b13-ff58-4db0-9f41-a8e115369931",
          amount: req.amount,
        },
      ],
    });
    return Response.json(res);
  } catch (error) {
    let err = error as ApiError;
    return new Response(err.message, err);
  }
}
