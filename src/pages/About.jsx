function About() {
  return (
    <section className='max-w-max p-6 bg-white rounded-xl border'>
      <h1 className='text-lg font-bold text-gray-800 mb-6 border-b pb-2'>
        Kontak
      </h1>

      <main className='space-y-4 text-xs'>
        <div className='flex items-start'>
          <span className='font-semibold w-16'>Email</span>
          <span>: info@pesantren.sch.id</span>
        </div>
        <div className='flex items-start'>
          <span className='font-semibold w-16'>Telepon</span>
          <span>: +62 812-3456-7890</span>
        </div>
        <div className='flex items-start'>
          <span className='font-semibold w-16'>Alamat</span>
          <span>: Jl. Pesantren No. 1, Bandung, Jawa Barat</span>
        </div>
      </main>
    </section>
  );
}

export default About;
