import CustomPicker from "@/components/custom-picker";
import TimePicker from "@/components/time-picker";
import DatePicker from "@/components/date-picker";

export default function Page() {
  return (
    <main className="h-screen w-full grid grid-cols-2 grid-row-2 ">
      <div className="flex justify-center items-center border-r-2 border-b-2 border-white">
        <CustomPicker />
      </div>
      <div className="flex justify-center items-center border-l-2 border-b-2 border-white">
        <TimePicker />
      </div>
      <div className="col-span-2 flex justify-center items-center border-t-2  border-white">
        <DatePicker />
      </div>
    </main>
  );
}
