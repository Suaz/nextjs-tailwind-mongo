import { Button } from '@/components/ui/button'
import Link from 'next/link'
import LocalSearchbar from '@/components/shared/search/LocalSearchbar'
import Filter from '@/components/shared/filter/Filter'
import { HomePageFilters } from '@/constants/filters'
import HomeFilters from '@/components/home/HomeFilters'

export default function Home () {
  return (
    <>
      <div className={ 'flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center' }>
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href={ '/asl-question' } className={ 'flex justify-end max-sm:w-full' }>
          <Button className={ 'primary-gradient min-h-[46px] px-4 py-3 !text-light-900' }>
            Ask Question
          </Button>
        </Link>
      </div>

      <div className={ 'mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center' }>
        <LocalSearchbar
          route={ '/' }
          iconPosition={ 'left' }
          imgSrc={ '/assets/icons/search.svg' }
          placeholder={ 'Search Questions' }
          otherClasses={ 'flex-1' }
        />

        <Filter
          filters={ HomePageFilters }
          otherClasses={ 'min-h-[56px] sm:min-w-[170px]' }
          containerClasses={ 'hidden max-md:flex' }
        />

      </div>
      <HomeFilters/>
    </>
  )
}
