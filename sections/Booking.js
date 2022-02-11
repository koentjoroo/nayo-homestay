import { useTranslation } from "next-i18next"

export default function Booking() {
  const { t } = useTranslation("common")

  const handleSubmit = event => {
    event.preventDefault()
    alert("Whoohie")
  }

  return (
    <section id="booking" className="p-8 lg:p-16 bg-stone-900 text-stone-50">
      <div className="mx-auto container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="leading-relaxed text-center lg:text-left">
          <h2 className="text-4xl mb-4">{t("book_now")}!</h2>
          <p>
            Silahkan isi formulir di samping atau hubungi admin dengan nomor
            WhatsApp 08XXXXXXXXXX.
          </p>
          <p>
            Admin Nayo Homestay akan menghubungi nomor WhatsApp anda dalam waktu
            kurang dari 24 jam untuk menyelesaikan proses booking.
          </p>
        </div>
        <div className="bg-white rounded-md p-4 lg:p-8 text-stone-800">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-2">
              <label htmlFor="checkIn" className="flex flex-1 flex-col gap-1">
                <span className="text-sm text-stone-500">Check-in</span>
                <input
                  className="p-2 text-stone-300 rounded-md border-2 border-stone-300"
                  type="date"
                  name="checkIn"
                  id="checkIn"
                />
              </label>
              <label htmlFor="checkOut" className="flex flex-1 flex-col gap-1">
                <span className="text-sm text-stone-500">Check-out</span>
                <input
                  className="p-2 text-stone-300 rounded-md border-2 border-stone-300"
                  type="date"
                  name="checkOut"
                  id="checkOut"
                />
              </label>
            </div>
            <label htmlFor="people" className="flex flex-col gap-1">
              <span className="text-sm text-stone-500">Jumlah Orang</span>
              <input
                className="p-2 text-stone-300 rounded-md border-2 border-stone-300"
                type="number"
                name="people"
                id="people"
              />
            </label>
            <label htmlFor="customerName" className="flex flex-col gap-1">
              <span className="text-sm text-stone-500">Atas Nama</span>
              <input
                className="p-2 text-stone-300 rounded-md border-2 border-stone-300"
                type="text"
                name="customerName"
                id="customerName"
              />
            </label>
            <label htmlFor="whatsappNumber" className="flex flex-col gap-1">
              <span className="text-sm text-stone-500">Nomor WhatsApp</span>
              <input
                className="p-2 text-stone-300 rounded-md border-2 border-stone-300"
                type="text"
                name="whatsappNumber"
                id="whatsappNumber"
              />
            </label>
            <input
              className="w-full p-4 rounded-md bg-orange-500 hover:bg-orange-600 transition-colors uppercase font-bold tracking-widest cursor-pointer text-white text-center"
              type="submit"
              value="Cek Ketersediaan"
            />
          </form>
        </div>
      </div>
    </section>
  )
}
