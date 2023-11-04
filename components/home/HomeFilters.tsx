'use client'
import React, { useState } from 'react'
import { HomePageFilters } from '@/constants/filters'
import { Button } from '@/components/ui/button'

const HomeFilters = () => {
  const [ active, setActive ] = useState( '' )
  return (
    <div className={ 'mt-10 hidden flex-wrap gap-3 md:flex' }>
      {
        HomePageFilters.map( ( { name, value } ) => (
          <Button key={ value }
                  onClick={ ( ) => setActive( value ) }
                  className={ `body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
                    active === value
                      ? 'bg-primary-100 text-primary-500'
                      : 'bg-light-800 text-light-500'
                  }` }>
            { name }
          </Button>
        ) )
      }
    </div>
  )
}

export default HomeFilters
