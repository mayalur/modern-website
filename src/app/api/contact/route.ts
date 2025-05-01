export async function POST(req: Request) {
  return new Response(JSON.stringify({ message: 'Form submission temporarily disabled' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}