import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

function Navbar() {
  return (
    <nav className='flex items-center justify-end px-6 py-4 shadow-sm border-zinc-200'>
      <div className='flex items-center gap-2'>
        <Avatar className='h-7 w-7 rounded-full border border-zinc-200'>
          <AvatarImage
            src='https://github.com/shadcn.png'
            alt='@shadcn'
            className='object-cover'
          />
          <AvatarFallback className='text-xs font-medium bg-zinc-100 text-zinc-700'>
            CN
          </AvatarFallback>
        </Avatar>

        <p className='text-sm'>Nama kalian</p>
      </div>
    </nav>
  );
}

export default Navbar;
