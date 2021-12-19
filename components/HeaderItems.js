function HeaderItems({ Icon, title }) {
  return (
    <div className=" flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-green-500">
      <Icon size="2em" className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}

export default HeaderItems;
