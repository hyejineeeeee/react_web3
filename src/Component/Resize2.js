import React, { useEffect, useRef } from 'react';

function Resize2() {
  console.log('리사이즈');

  //가상 돔 제작
  const width = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', () => {
    width.current = window.innerWidth;
    console.log(width.current);
    });
  }, []);
  return (
    <>
      
    </>
  );
}

export default Resize2;