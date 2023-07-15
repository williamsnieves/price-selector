export default function PlanSelector() {
  return (
    <section className="mt-10 flex flex-col md:flex-row md:mt-40 md:mx-12 md:gap-5 md:max-w-screen-2xl 2xl:mx-auto 2xl:w-[1800px]">
      <div className="rounded-xl shadow-md bg-white p-8 m-4 md:m-0 md:grow">
        <h3 className="text-[#717192] text-2xl text-center">Basic</h3>
        <h2 className="text-5xl text-center font-black text-[#4a4c60] py-6 border-b border-b-[#e3e4e6]">
          $19.99
        </h2>
        <p className="text-center text-xl font-semibold text-[#717192] py-4 border-b border-b-[#e3e4e6]">
          500 GB Storage
        </p>
        <p className="text-center text-xl font-semibold text-[#717192] py-4 border-b border-b-[#e3e4e6]">
          2 Users Allowed
        </p>
        <p className="text-center text-xl font-semibold text-[#717192] py-4 border-b border-b-[#e3e4e6]">
          Send up to 3 GB
        </p>
        <button className="bg-gradient-to-r from-[#9ea1ee] to-[#6d72de] p-4 text-center w-full text-white font-semibold uppercase mt-8">
          Learn More
        </button>
      </div>
      <div className="text-white rounded-xl shadow-md bg-gradient-to-br from-[#9ea1ee] to-[#6d72de] p-6 m-4 md:m-0 md:grow md:scale-125">
        <h3 className="text-2xl text-center">Professional</h3>
        <h2 className="text-5xl text-center font-black py-6 border-b border-b-[#e3e4e6]">
          $24.99
        </h2>
        <p className="text-center text-xl font-semibold py-4 border-b border-b-[#e3e4e6]">
          1 TB Storage
        </p>
        <p className="text-center text-xl font-semibold py-4 border-b border-b-[#e3e4e6]">
          5 Users Allowed
        </p>
        <p className="text-center text-xl font-semibold py-4 border-b border-b-[#e3e4e6]">
          Send up to 10 GB
        </p>
        <button className="bg-white p-4 text-center w-full text-[#6d72de] font-semibold uppercase mt-8">
          Learn More
        </button>
      </div>
      <div className="rounded-xl shadow-md bg-white p-6 m-4 md:m-0 md:grow">
        <h3 className="text-[#717192] text-2xl text-center">Master</h3>
        <h2 className="text-5xl text-center font-black text-[#4a4c60] py-6 border-b border-b-[#e3e4e6]">
          $39.99
        </h2>
        <p className="text-center text-xl font-semibold text-[#717192] py-4 border-b border-b-[#e3e4e6]">
          2 TB Storage
        </p>
        <p className="text-center text-xl font-semibold text-[#717192] py-4 border-b border-b-[#e3e4e6]">
          10 Users Allowed
        </p>
        <p className="text-center text-xl font-semibold text-[#717192] py-4 border-b border-b-[#e3e4e6]">
          Send up to 20 GB
        </p>
        <button className="bg-gradient-to-r from-[#9ea1ee] to-[#6d72de] p-4 text-center w-full text-white font-semibold uppercase mt-8">
          Learn More
        </button>
      </div>
    </section>
  );
}
