const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-primary-dark/80 py-2 relative">
      <div className="w-full h-[1px] bg-gradient-to-r from-accent to-accent-dark absolute top-0"></div>
      <p className="flex items-center gap-1 justify-center cursor-default">
        Power by
        <a
          href="https://thecoderbutcher.site"
          target="_blank"
          className="text-accent transition-all duration-300"
        >
          thecoderbutcher
        </a>
        with
        <span className="text-accent hover:scale-125 animate-pulse">❤</span>
      </p>
    </div>
  )
}

export default Footer
