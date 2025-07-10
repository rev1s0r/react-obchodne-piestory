export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Stránka nenájdená</h1>
      <p className="mb-8">Ospravedlňujeme sa, požadovaná stránka neexistuje.</p>
      <a href="https://www.obchodnepriestory.sk" className="text-blue-600 underline">Späť na úvod</a>
    </div>
  );
}