import rm from "../public/rm.svg"
import re from "../public/re.svg"
import rv from "../public/rv.svg"
import lv from "../public/lv.svg"
import Image from 'next/image'

export default function Services({}) {
    return (
        <div className='services'>
            <div className='services-title'>Nossos Serviços</div>
            <div className='services-list'>
              <div className='service'>
                <div className='service-title'>Reparos Mecânicos</div>
                <div className='service-svg'>
                  <Image src={rm} width="110"/>
                </div>
              </div>
              <div className='service'>
                <div className='service-title'>Reparos Elétricos</div>
                <div className='service-svg'>
                  <Image src={re} width="110"/>
                </div>
              </div>
              <div className='service'>
                <div className='service-title'>Revisão</div>
                <div className='service-svg'>
                  <Image src={rv}  width="110"/>
                </div>
              </div>
              <div className='service'>
                <div className='service-title'>Lavagem</div>
                <div className='service-svg'>
                  <Image src={lv}  width="110"/>
                </div>
              </div>
            </div>
        </div>
    )
}