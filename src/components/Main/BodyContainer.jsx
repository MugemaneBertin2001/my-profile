
import TopHeader from './TopHeader'
import LeftNav from './LeftNav'
import RightPart from './RightPart'

function BodyContainer() {
  return (
    <div className='p-6  mx-auto'>
        <TopHeader/>
        <div className='flex w-[95%] mx-auto'>
        <LeftNav />
        <RightPart />
        </div>
        
    </div>
  )
}

export default BodyContainer