import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
       <section className='home-section'>
         <CompanionCard 
            id="123"
            name="Neura the Brainy Explorer"
            topic="Neural Network of the Brain"
            subject="science"
            duration={45}
            color="#ffda6e"
         />
         <CompanionCard 
            id="456"
            name="The Growth Expert"
            topic="Scaling Your Business Successfully"
            subject="Business"
            duration={20}
            color="#e5d0ff"
         />
         <CompanionCard 
            id="789"
            name="Verba the Vocabulary Builder"
            topic="English Literature"
            subject="Language"
            duration={30}
            color="#bde7ff"
         />
       </section>

       <section className='home-section'>
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
       </section>
    </main>
  )
}

export default Page