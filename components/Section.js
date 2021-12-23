import cx from "clsx"

export default function Section(props) {
  const classes = cx("p-16", props.className)
  return (
    <section id={props.id} className={classes}>
      <div className="mx-auto container">
        <div className="mb-16 flex flex-col items-center gap-2">
          <hr className="mx-auto border-stone-300 w-[72px]" />
          <h2 className="font-bold text-stone-800 tracking-tight text-4xl">
            {props.title}
          </h2>
        </div>
        {props.children}
      </div>
    </section>
  )
}
