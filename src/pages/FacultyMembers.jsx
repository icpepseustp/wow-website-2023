import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { faculty } from '../utils/data/faculty';
import { Carousel } from 'react-responsive-carousel';
import skip from '../assets/skip.png';
import '../App.css'

const FacultyMembers = () => {

  const handleScreen = () => {
    var width = window.innerWidth;

    if (width >= 1024) return 0;

    if (width < 1024 && width > 768) return 1;

    return 2;

  };

  const [screen, setScreen] = useState(handleScreen());
  const [down, setDown] = useState('');
  const [changeOp, setChangeOp] = useState('');
  const [onAnimation, setOnAnimation] = useState(false);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(3);
  const cols = [4, 2, 1];

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreen(handleScreen());
      setMaxIndex(faculty.length / cols[screen]);
    })

    setMaxIndex(faculty.length / cols[screen]);
  }, []);

  const nextIndex = () => {
    if (!onAnimation) {

      console.log(maxIndex)

      setOnAnimation(true);
      setDown('move-down')
      setChangeOp('text-op')

      setTimeout(() => {
        if (index == maxIndex - 1) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
      }, 2000);

      setTimeout(() => {
        setOnAnimation(false);
        setDown('')
        setChangeOp('')
      }, 3000);
    }
  }

  const prevIndex = () => {
    if (!onAnimation) {
      setOnAnimation(true);
      setDown('move-down')
      setChangeOp('text-op')

      setTimeout(() => {
        if (index < 1) {
          setIndex(maxIndex - 1);
        } else {
          setIndex(index - 1);
        }
      }, 2000);

      setTimeout(() => {
        setOnAnimation(false);
        setDown('')
        setChangeOp('')
      }, 3000);
    }
  }

  return (
    <Container>
      <div className='flex flex-col relative h-screen bg-[#EFECFF] text-[#000668] justify-center items-center'>
        <h1 className='font-bricksans lg:text-5xl lg:mb-14 md:text-[35px] text-2xl mb-8'>Faculty Members</h1>

        <div className={`${changeOp} flex flex-col items-center gap-y-4`}>
          <div className='lg:grid md:grid lg:grid-cols-4 md:grid-cols-2 flex gap-x-12'>
            {faculty.slice((index * cols[screen]), ((index * cols[screen]) + cols[screen])).map((f) => {
              return <img className='object-fill w-full lg:h-52 md:h-52 h-60 border-4 border-[#000668] rounded-[25px]' src={f['photo_url']} alt={f['name']} />
            })}
          </div>
          <div className='lg:grid lg:grid-cols-4 md:grid-cols-2 md:gap-x-12 lg:gap-x-12 flex'>
            {faculty.slice((index * cols[screen]), ((index * cols[screen]) + cols[screen])).map((f, i) => {
              return (
                <div className='lg:h-48 lg:w-53 md:w-52 h-48 w-60 relative overflow-hidden rounded-[15px]'>
                  <div className={`flex flex-col h-full items-center w-full ${down} bg-[#D0C6FF] rounded-[15px]`}>
                    <div className='flex justify-center items-center h-14 w-full p-4 bg-[#343CFF] rounded-[15px]'>
                      <h1 className={`font-arcade text-lg leading-none ${changeOp} text-center text-white`} >{f['name']}</h1>
                    </div>
                    <div className={`${changeOp} text-center font-garet p-2 px-4`}>
                      {(i === maxIndex && index === maxIndex - 1) ? (<div>
                        <h1 className='leading-tight lg:text-[12px] text-sm uppercase font-[1000]'>{f['position']}</h1>
                        <p className='leading-tight lg:text-[12px] text-sm my-2 font-[500]'>{f['degree']}</p> </div>) : (
                        <div>
                          <h1 className='text-sm uppercase font-[1000]'>{f['position']}</h1>
                          <p className='leading-tight text-sm my-3 font-[500]'>{f['degree']}</p>
                        </div>
                      )}

                    </div>
                  </div>
                </div>

              );
            }
            )}
          </div>
        </div>

        <h1 className='absolute lg:right-14 right-6 top-1/2' onClick={() => { nextIndex() }}>
          <img className={`${changeOp} lg:w-14 lg:h-14 md:h-10 md:w-10 w-8 h-8 cursor-pointer`} src={skip} alt='next' />
        </h1>

        <h1 className='rotate-180 absolute lg:left-14 left-6 top-1/2' onClick={() => { prevIndex() }}>
          <img className={`${changeOp} lg:w-14 lg:h-14 md:h-10 md:w-10 w-8 h-8 cursor-pointer`} src={skip} alt='next' />
        </h1>


      </div>
    </Container>
  )
}

export default FacultyMembers