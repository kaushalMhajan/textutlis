import React from 'react'

export default function Error() {

    const styles = {
        innerHeight : '200px',
        innerWidth : '100%'
    }
  return (
    <div >
      <div className='container' style={styles}> 
        <p>Sorry :) page 404 not found</p>
        </div>
    </div>
  )
}
