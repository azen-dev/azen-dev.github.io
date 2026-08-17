import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notfound-screen">
      <p className="mono notfound-code">404</p>
      <h1 className="display notfound-title">Сторінку не знайдено</h1>
      <p className="notfound-desc">
        Такої сторінки не існує — можливо, посилання застаріле. Повернись на головну.
      </p>
      <Link href="/" className="btn btn-primary">
        На головну →
      </Link>
    </div>
  );
}
