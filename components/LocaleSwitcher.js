import { Listbox, Transition } from "@headlessui/react"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { Fragment } from "react"
import { AiOutlineGlobal } from "react-icons/ai"

const localeTexts = {
  id: "indonesia",
  en: "english",
}

export default function LocaleSwitcher() {
  const { t } = useTranslation("common")
  const { locales, locale: currentLocale, asPath, push } = useRouter()
  return (
    <Listbox
      value={currentLocale}
      onChange={locale => push(asPath, asPath, { locale })}
    >
      <div className="relative">
        <Listbox.Button className="relative flex w-full items-center gap-2 px-4">
          {currentLocale.toUpperCase()} <AiOutlineGlobal />
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute right-0 w-max rounded-sm bg-stone-50 py-2">
            {locales.map(locale => (
              <Listbox.Option
                key={locale}
                value={locale}
                className={({ active }) =>
                  `${
                    active ? "bg-orange-100 text-orange-500" : "text-stone-500"
                  } cursor-pointer px-4`
                }
              >
                {t(localeTexts[locale])}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
