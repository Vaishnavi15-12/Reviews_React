import { useState } from 'react';
import people from './data';
import { FaQuoteRight,FaChevronLeft,FaChevronRight } from "react-icons/fa";


const App = () => {
  const [ index,setIndex] = useState(0);
  const {name,job,image,text} = people[index];
  
  const nextPerson = () => {

    setIndex((currentIndex) => {
      const newIndex = (index + 1) % people.length;
      return newIndex;
    })
   
    
    
  }
  const previousPerson = () => {
    const newIndex = (index - 1 + people.length) % people.length;
   
    setIndex(newIndex);
    return;    
  }
  const randomPersom = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    
    setIndex(randomNumber);

  };

  return (
    <main>
      <article className='review'>
        <div className="img-container">
          <img src={image} alt={text} className='person-img' ></img>
          <span className='quote-icon'><FaQuoteRight/></span>
          
        </div>
          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info'>{text}</p>

          <div className="btn-container">
            <button className='prev-btn' onClick={previousPerson}><FaChevronLeft/></button>
            <button className='next-btn' onClick={nextPerson}><FaChevronRight/></button>
          </div>

          <button className='btn btn-hipster' onClick={randomPersom}>Surprise me</button>
          
          
      
      </article>
      
      
    </main>
  );
};
export default App;
