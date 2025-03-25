import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

addEventListener("fetch", (event) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    // Try to get the asset from KV
    let response = await getAssetFromKV(event);

    // If the request is for the root path or ends with .html, set cache control headers
    if (
      event.request.url.endsWith("/") ||
      event.request.url.endsWith(".html")
    ) {
      response = new Response(response.body, {
        ...response,
        headers: {
          ...response.headers,
          "Cache-Control": "public, max-age=0, must-revalidate",
        },
      });
    } else {
      // For other assets, set a longer cache time
      response = new Response(response.body, {
        ...response,
        headers: {
          ...response.headers,
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }
    return response;
  } catch (e) {
    // If the requested file is not found or there's an error
    // Return the index.html file for client-side routing
    try {
      let notFoundResponse = await getAssetFromKV(event, {
        mapRequestToAsset: (req) =>
          new Request(`${new URL(req.url).origin}/index.html`, req),
      });

      return new Response(notFoundResponse.body, {
        ...notFoundResponse,
        status: 200,
        headers: {
          ...notFoundResponse.headers,
          "Cache-Control": "public, max-age=0, must-revalidate",
        },
      });
    } catch (e) {
      return new Response("An error occurred", { status: 500 });
    }
  }
}
