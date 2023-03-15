import EachReward from "./EachReward"

export default function Rewards() {
  return (
    <div className='rewards dashboard-item'>
        <div className="internal">
            <div className="dashboard-ip smp">RECOMPENSAS</div>
            <div className="rewards-section">
                <EachReward/>
            </div>
        </div>
    </div>
  )
}
