import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from '../store'
import { CustomButton } from '../components'
import { 
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro &&(
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
            src="./threejs.png" 
            alt="logo"
            className='w-8 h-8 object-contain' 
            
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="x1:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div 
            {...headContentAnimation}
            className='flex flex-col gap-5'
            >
              <p className='max-w-md font-normal text-gray-600 text-base'>Crie sua unica e exclusica camiseta totalmente em 3D com essa ferramenta de customização. <strong>Solte sua imaginação</strong>{" "} e crie seu próprio estilo!
              </p>

              <CustomButton
                type="filled"
                title="Costumize-o"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />

            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home