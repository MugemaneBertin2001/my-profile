
import Exclusive from './Exclusive'
import Support from './Support'
import Account from './Account'
import QuickLink from './QuickLink'
import Download from './Download'
import Copyright from './Copyright'

function Footer() {
  return (
    <div className=' bg-black text-white'>
    <div className='flex space-x-5 static h-auto p-5'>
      <Exclusive />
      <Support />
      <Account />
      <QuickLink />
      <Download />
    </div>
    <Copyright />
    </div>
  )
}

export default Footer