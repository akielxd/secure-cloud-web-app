// functions/contact.js
export async function onRequestPost(context) {
  try {
    const { request } = context;
    const content = await request.json();

    const { name, email, message } = content;

    // Simulate form processing (send email, store in DB, etc.)
    console.log("Form received:", name, email, message);

    return new Response(
      JSON.stringify({ status: "success", message: "Message received!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
    });
  }
}

