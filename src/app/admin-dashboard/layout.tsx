export default function admindashboardlayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
      return <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-white">Admin</div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200">Container</div>
      </div>;

  }