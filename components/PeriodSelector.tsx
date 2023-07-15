export default function PeriodSelector() {
  return (
    <section>
      <div className="flex justify-center mt-6 gap-3">
        <h3 className="text-[#b2b1bf]">Annually</h3>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-12 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[-2px] after:bg-white after:border-none after:border-none after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-none peer-checked:bg-[#7c80e2]"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        </label>
        <h3 className="text-[#b2b1bf]">Monthly</h3>
      </div>
    </section>
  );
}
