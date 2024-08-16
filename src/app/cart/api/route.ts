// "use server";

import { ApiError, Tranzakt } from "tpp-node-sdk";

export async function POST(request: Request) {
  const tranzakt = new Tranzakt(
    "MHcCAQEEIM8IJHkS0CNdz9ZSRngCK7hIvvM+rcPN5qWXMyS7tTZroAoGCCqGSM49AwEHoUQDQgAEk69TkOdG4fvRtuM2+uuKa28cgdffnd9fNj5z9nXxPZW0kNBMoKAW6gI3a1S94W0A8/q/SJkXdESn7iIfu70yxw=="
  );
  try {
    const req: { amount: number } = await request.json();
    const res = await tranzakt.createInvoice({
      collectionId: "084ac03a-0c00-4c3c-8101-a45405467d1b",
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
