export async function POST() {
  return new Response(JSON.stringify({ message: 'Form submission temporarily disabled' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}