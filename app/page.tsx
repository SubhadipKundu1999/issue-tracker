import Image from 'next/image'
import Pagination from './components/Pagination'

export default function Home({searchParams}:{searchParams:{page: string}}) {
  return (
   <div>
    Home page / Dashboard
    <Pagination itemCounts={100} pageSize={10} currentPage={parseInt(searchParams.page)}/>
   </div>
  )
}
