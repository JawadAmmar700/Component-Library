import CustomPicker from "@/components/custom-picker";
import TimePicker from "@/components/time-picker";
import DatePicker from "@/components/date-picker";

export default function Page() {
  return (
    <main className="h-screen w-full py-5  grid md:grid-cols-2 md:grid-row-2 grid-cols-1">
      <div className="flex justify-center items-center md:border-r-2 border-b-2 border-white">
        <CustomPicker />
      </div>
      <div className="flex justify-center items-center md:border-l-2 md:border-b-2 border-white">
        <TimePicker />
      </div>
      <div className="md:col-span-2 flex px-5 md:px-0 justify-center items-center border-t-2  border-white">
        <DatePicker />
      </div>
    </main>
  );
}
