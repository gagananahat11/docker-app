export default function Home() {
  return (
    <div>
      <h1>Docker Memory App</h1>
      <p>API URL: {process.env.NEXT_PUBLIC_API_URL}</p>
    </div>
  );
}
