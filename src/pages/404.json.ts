import type { APIRoute } from 'astro';

export const get: APIRoute = () => {
  return new Response(JSON.stringify({
    error: 404,
    message: "Plik nie istnieje"
  }), { status: 404, headers: { "Content-Type": "application/json" }});
};
