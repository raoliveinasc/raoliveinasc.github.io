import Link from "next/link"

export default function RequestBudget({}) {
    return (
        <div className="request-budget">
            <div className="rb-image"></div>
            <div className="rb-context">
                <div className="rb-title">Solicite um Orçamento</div>
                <Link href="/" className="rb-btn">Agende uma visita</Link>
            </div>
        </div>
    )
}