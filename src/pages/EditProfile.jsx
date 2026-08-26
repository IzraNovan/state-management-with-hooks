import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function EditProfile() {
  return (
    <div className='max-w-md p-6 border rounded-lg shadow-sm'>
      <h1 className='font-semibold mb-4'>Edit Profile</h1>

      <form className='space-y-4 text-xs'>
        <div>
          <Label className='mb-2'>Username</Label>
          <Input type='text' />
        </div>

        <Button type='submit'>Simpan</Button>
      </form>
    </div>
  );
}

export default EditProfile;
