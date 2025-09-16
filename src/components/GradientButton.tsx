export const GradientButton = ({ title, size }: IButton) => {
  return (   
    <div className={`${sizeVariant[size]} flex h-full flex-row items-center justify-center gap-2 rounded-lg transition-all font-semibold bg-linear-to-br from-violet-600 via-blue-600 to-cyan-400 text-white-950 hover:from-blue-500 hover:via-blue-400 hover:to-cyan-400 text-sm px-4 whitespace-nowrap`}>
      {title}
    </div>
  )
}

const sizeVariant = {
  sm: "py-2 text-sm",
  md: "py-3 text-sm md:text-lg"
}

interface IButton {
  title: string;
  size: "sm" | "md"
}