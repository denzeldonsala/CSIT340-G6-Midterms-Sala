const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-[#CB2957] bg-[#000000] px-6 py-6 text-[#EEEEEE] sm:px-10 lg:px-20">
      <h1 className="text-3xl font-bold">Cloudline</h1>
      <ul className="flex gap-4 text-base sm:gap-10 sm:text-xl">
        <li>Product</li>
        <li>Pricing</li>
        <li>Support</li>
      </ul>
    </nav>
  );
};

export default Navbar;
