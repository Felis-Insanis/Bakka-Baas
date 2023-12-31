import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function KontaktBokser() {
  const gridboxStyles =
    "flex items-center lg:justify-center gap-5 w-30 h-30 border border-green-400 pl-2 p-3 rounded-md";
  const iconStyle = "w-16 h-16 text-green-400";
  const mailIcons = "w-8 h-8 hover:text-green-400";
  const nameStyles = "text-3xl mt-7 text-green-400";
  return (
    <div className={gridboxStyles}>
      <div className="h-full flex flex-col justify-center">
        <FaUser className={iconStyle} />{" "}
      </div>

      <div className="flex flex-col gap-1 mt">
        <span className={nameStyles}>Attila</span>
        <span>kontakt på:</span>
        <span className="h-[1px] w-11/12 bg-green-400"></span>
        <div className="flex gap-2 items-center ">
          <Link href="mailto:atcsa001@osloskolen.no">
            <MdEmail className={mailIcons} />
          </Link>{" "}
          <span>atcsa001@osloskolen.no</span>
        </div>
      </div>
    </div>
  );
}
