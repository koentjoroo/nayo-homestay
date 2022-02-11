import Section from "components/Section"
import { useTranslation } from 'next-i18next'

export default function Location() {
  const { t } = useTranslation('common')

  return (
    <Section id="location" title={t('homestay_location')}>
      <div className="flex flex-col gap-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.098708850298!2d110.43423951442101!3d-7.7793578943936215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5b05a54ab573%3A0xd219c94d757964eb!2sNayo%20Homestay!5e0!3m2!1sen!2sid!4v1640170643697!5m2!1sen!2sid"
          className="w-full aspect-square lg:aspect-video border-0 rounded-md"
          loading="lazy"
        ></iframe>
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-row justify-between gap-8">
          <div className="max-w-prose flex flex-col gap-2">
            <span className="font-bold uppercase tracking-wider text-stone-800">
              {t('address')}
            </span>
            <p className="text-stone-500">
              Jalan Rambutan Nomor 11, Sambelegi Kidul, Maguwoharjo, Kec. Depok,
              Kabupaten Sleman, Daerah Istimewa Yogyakarta
            </p>
          </div>
          <a
            className="font-bold tracking-widest uppercase text-orange-500 hover:text-orange-600"
            href="https://goo.gl/maps/8m5oDT5yLz79WcRy5"
          >
            {t('check_on_gmaps')} &rarr;
          </a>
        </div>
      </div>
    </Section>
  )
}
