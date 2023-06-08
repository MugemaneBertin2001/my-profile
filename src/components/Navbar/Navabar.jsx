import WebLogo from './WebLogo'
import NavSet from './NavSet'
import UserKits from './UserKits'

function Navabar() {
  return (
    <div className='flex space-x-8  bg-light-700 w-[90%] mx-auto'>
        <WebLogo />
        <NavSet />
        <UserKits />

    </div>
  )
}

export default Navabar