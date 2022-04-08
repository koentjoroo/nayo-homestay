import { Field, Form, Formik } from "formik"
import { useTranslation } from "next-i18next"

export default function Booking() {
  const { t } = useTranslation("common")

  const initialValues = {
    checkIn: "",
    checkOut: "",
    customerName: "",
    numberOfAdults: 0,
    numberOfKids: 0,
    numberOfRooms: 0,
    whatsappNumber: "",
  }

  const validate = values => {
    const errors = {}

    if (!values.checkIn) errors.checkIn = "Required"
    if (!values.checkOut) errors.checkOut = "Required"
    if (!values.customerName) errors.customerName = "Required"
    if (values.numberOfAdults < 1) errors.numberOfAdults = "Required"
    if (values.numberOfRooms < 1) errors.numberOfRooms = "Required"
    if (!values.whatsappNumber) errors.whatsappNumber = "Required"

    return errors
  }

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Kepanggil")
    const text = `
      Halo! Saya ingin booking kamar.
      Atas nama *${values.customerName}*
      Check-in *${values.checkIn}*
      Check-out *${values.checkOut}*
      Dewasa *${values.numberOfAdults}*
      Anak-anak *${values.numberOfKids}*
      Jumlah kamar dipesan *${values.numberOfRooms}*
      Kontak WA *${values.whatsappNumber}*
    `
    const queryParams = new URLSearchParams({
      phone: "6281328144878",
      text: text.replace(/  +/g, ""),
    })
    const url = "https://api.whatsapp.com/send?" + queryParams.toString()
    window.open(url, "_blank")
    setSubmitting(false)
  }

  return (
    <section
      id="booking"
      className="py-8 md:py-16 px-4 xs:px-8 md:px-16 bg-fixed bg-daily-pond bg-cover bg-center text-stone-50"
    >
      <div className="container grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
        <div className="leading-relaxed text-center lg:text-left">
          <h2 className="mb-4 text-4xl">{t("book_now")}!</h2>
          <p>{t("booking_paragraph_1")}</p>
          <p>{t("booking_paragraph_2")}</p>
        </div>
        <div className="p-4 bg-white rounded-md lg:p-8 text-stone-800">
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors }) => (
              <Form className="flex flex-col gap-4 text-sm">
                <label htmlFor="customerName" className="flex flex-col gap-1">
                  <span className="text-xs text-stone-500">
                    {t("customer_name")}
                  </span>
                  <Field
                    className="w-full p-2 border-2 border-stone-100 bg-white rounded-md text-stone-300 shadow-md focus:text-stone-800 focus:outline-orange-300 focus:shadow-none"
                    type="text"
                    name="customerName"
                    id="customerName"
                    required
                  />
                </label>
                <div className="flex flex-wrap gap-2">
                  <label
                    htmlFor="checkIn"
                    className="flex flex-col flex-1 gap-1"
                  >
                    <span className="text-xs text-stone-500">Check-in</span>
                    <Field
                      className="w-full p-2 border-2 border-stone-100 bg-white rounded-md text-stone-300 shadow-md focus:text-stone-800 focus:outline-orange-300 focus:shadow-none"
                      type="date"
                      name="checkIn"
                      id="checkIn"
                      required
                    />
                  </label>
                  <label
                    htmlFor="checkOut"
                    className="flex flex-col flex-1 gap-1"
                  >
                    <span className="text-xs text-stone-500">Check-out</span>
                    <Field
                      className="w-full p-2 border-2 border-stone-100 bg-white rounded-md text-stone-300 shadow-md focus:text-stone-800 focus:outline-orange-300 focus:shadow-none"
                      type="date"
                      name="checkOut"
                      id="checkOut"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-wrap gap-2">
                  <label
                    htmlFor="numberOfAdults"
                    className="flex flex-col flex-1 gap-1"
                  >
                    <span className="text-xs text-stone-500">
                      {t("number_of_adults")}
                    </span>
                    <Field
                      className="w-full p-2 border-2 border-stone-100 bg-white rounded-md text-stone-300 shadow-md focus:text-stone-800 focus:outline-orange-300 focus:shadow-none"
                      type="number"
                      name="numberOfAdults"
                      id="numberOfAdults"
                      required
                    />
                  </label>
                  <label
                    htmlFor="numberOfKids"
                    className="flex flex-col flex-1 gap-1"
                  >
                    <span className="text-xs text-stone-500">
                      {t("number_of_kids")}
                    </span>
                    <Field
                      className="w-full p-2 border-2 border-stone-100 bg-white rounded-md text-stone-300 shadow-md focus:text-stone-800 focus:outline-orange-300 focus:shadow-none"
                      type="number"
                      name="numberOfKids"
                      id="numberOfKids"
                    />
                  </label>
                </div>
                <label
                  htmlFor="numberOfRooms"
                  className="flex flex-col flex-1 gap-1"
                >
                  <span className="text-xs text-stone-500">
                    {t("number_of_rooms")}
                  </span>
                  <Field
                    className="w-full p-2 border-2 border-stone-100 bg-white rounded-md text-stone-300 shadow-md focus:text-stone-800 focus:outline-orange-300 focus:shadow-none"
                    type="number"
                    name="numberOfRooms"
                    id="numberOfRooms"
                    required
                  />
                </label>
                <label htmlFor="whatsappNumber" className="flex flex-col gap-1">
                  <span className="text-xs text-stone-500">
                    {t("whatsapp_number")}
                  </span>
                  <Field
                    className="w-full p-2 border-2 border-stone-100 bg-white rounded-md text-stone-300 shadow-md focus:text-stone-800 focus:outline-orange-300 focus:shadow-none"
                    type="text"
                    name="whatsappNumber"
                    id="whatsappNumber"
                    required
                  />
                </label>
                <button
                  className="w-full p-4 font-bold tracking-widest text-center text-white uppercase transition-colors bg-orange-500 shadow-md shadow-orange-500/10 rounded-md cursor-pointer hover:bg-orange-400 disabled:bg-orange-200 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSubmitting || Object.keys(errors).length}
                >
                  {t("send_reservation")}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}
