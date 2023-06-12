if (process.env.NEXT_PUBLIC_USE_USER_KEY !== "true") {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing env var from OpenAI");
  }
}

export const config = {
  runtime: "edge",
};

const handler = async (): Promise<Response> => {
  const res = await fetch(
    `https://oa.api2d.net/dashboard/billing/credit_grants`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
      },
      method: "GET",
    }
  );
  return res;
};

export default handler;
