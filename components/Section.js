import cx from "clsx"

export default function Section(props) {
  const classes = cx("py-8 md:py-16 px-4 xs:px-8 md:px-16", props.className)
  return (
    <section id={props.id} className={classes}>
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center gap-2">
          <hr className="mx-auto w-[72px] border-stone-300" />
          <h2 className="text-center text-4xl font-bold tracking-tight text-stone-800">
            {props.title}
          </h2>
        </div>
        {props.children}
      </div>
    </section>
  )
}
