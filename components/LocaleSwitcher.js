import { Listbox, Transition } from "@headlessui/react"
import { useRouter } from "next/router"
import { Fragment } from "react"
import { AiOutlineGlobal } from "react-icons/ai"

export default function LocaleSwitcher() {
  const { locales, locale: currentLocale, asPath, push } = useRouter()
  return (
    <Listbox
      value={currentLocale}
      onChange={locale => push(asPath, asPath, { locale })}
    >
      <div className="relative">
        <Listbox.Button className="relative flex items-center w-full gap-2 px-4">
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
          <Listbox.Options className="absolute w-full py-2 rounded-sm bg-stone-50">
            {locales.map(locale => (
              <Listbox.Option
                key={locale}
                value={locale}
                className={({ active }) =>
                  `${
                    active ? "bg-orange-100 text-orange-500" : "text-stone-500"
                  } px-4 cursor-pointer`
                }
              >
                {locale.toUpperCase()}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
