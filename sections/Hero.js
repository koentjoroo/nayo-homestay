export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-stone-900 text-white h-screen md:h-[40rem] w-full"
    >
      <div className="mx-auto container text-center h-full flex flex-col items-center justify-center gap-8">
        <h1 className="font-black tracking-tight leading-tight text-[4rem]">
          Penginapan Eksklusif Untuk Keluarga
        </h1>
        <p className="max-w-prose text-2xl">
          Berjarak 7 menit dari Bandara Adisucipto Yogyakarta dengan harga mulai
          dari Rp150.000 per kamar per hari
        </p>
        <button className="font-bold uppercase tracking-wide text-orange-50 shadow-lg shadow-orange-500/25 px-16 py-4 rounded-full bg-orange-500">
          Booking Sekarang
        </button>
      </div>
    </section>
  )
}
