import React from 'react';
import { useSelector } from 'react-redux';
import spinner from '../../Assets/Spinner-1s-200px.gif';
import './Preloader.css';

const Preloader = () => {
  const isLoading = useSelector(state => state.preloaderVar.isLoading)
if(!isLoading) return null;

  return (
    <div className="preloader">
        <img className='spinner' src={spinner} alt="" />
    </div>
  )
}

export default Preloader;