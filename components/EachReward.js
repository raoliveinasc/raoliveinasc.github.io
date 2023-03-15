import React from 'react'

export default function EachReward() {
  return (
    <>
        <div className='each-reward'>
            <div className='reward-text'>
                <div className='reward-title'>20% OFF</div>
                <div className='reward-exp'>Validade Indeterminada</div>
            </div>
            <button className='reward-button'>
                <i class="fa-solid fa-eye fa-xl"></i>
            </button>
        </div>
        <div className='each-reward'>
            <div className='reward-text'>
                <div className='reward-title'>Revisão Grátis</div>
                <div className='reward-exp'>Até 12/12/23</div>
            </div>
            <button className='reward-button'>
                <i class="fa-solid fa-eye fa-xl"></i>
            </button>
        </div>
        <div className='each-reward'>
            <div className='reward-text'>
                <div className='reward-title'>5% OFF</div>
                <div className='reward-exp'>Validade Indeterminada</div>
            </div>
            <button className='reward-button'>
                <i class="fa-solid fa-eye fa-xl"></i>
            </button>
        </div>
    </>
  )
}
