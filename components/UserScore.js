import Link from "next/link"

export default function UserScore() {
  return (
    <div className='user-score dashboard-item'>
      <div className="internal">
        <div className="dashboard-ip smp">PROGRAMA DE FIDELIDADE</div>
          <div className="dashboard-score-main">
              <div className="actual-score">1220</div>
              <div className="score-suffix">pontos</div>
          </div>
          <Link className="score-info" href="/">
              <i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
              <span>Saiba Mais</span>
          </Link>
      </div>
    </div>
  )
}
