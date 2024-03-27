export async function fetchRequest({ link, Req, bodyInfo, headersInfo }) {
  const Response = await fetch(link, {
    method: Req,
    body: bodyInfo ? bodyInfo : null,
    headers: headersInfo ? headersInfo : null,
  });
  const data = Response.json();
  return { data };
}
