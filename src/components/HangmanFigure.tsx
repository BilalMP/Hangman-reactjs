interface HangmanFigureProps {
    incorrectGuesses: number
}

const HangmanFigure: React.FC<HangmanFigureProps> = ({ incorrectGuesses }) => {
    return (
        <svg className="w-32 h-32 mx-auto mb-6" viewBox="0 0 100 100">
            <line x1="10" y1="90" x2="90" y2="90" stroke="black" strokeWidth="4" />
            <line x1="30" y1="90" x2="30" y2="10" stroke="black" strokeWidth="4" />
            <line x1="30" y1="10" x2="60" y2="10" stroke="black" strokeWidth="4" />
            <line x1="60" y1="10" x2="60" y2="20" stroke="black" strokeWidth="4" />
            {
                incorrectGuesses > 0 && (
                    <circle cx="60" cy="30" r="10" stroke="black" strokeWidth={4} fill="none" />
                )
            }
            {
                incorrectGuesses > 1 && (
                    <line x1="60" y1="40" x2="60" y2="60" stroke="black" strokeWidth="4" />
                )
            }
            {
                incorrectGuesses > 2 && (
                    <line x1="60" y1="45" x2="50" y2="55" stroke="black" strokeWidth="4" />
                )
            }
            {
                incorrectGuesses > 3 && (
                    <line x1="60" y1="45" x2="70" y2="55" stroke="black" strokeWidth="4" />
                )
            }
            {
                incorrectGuesses > 4 && (
                    <line x1="60" y1="60" x2="50" y2="80" stroke="black" strokeWidth="4" />
                )
            }
            {
                incorrectGuesses > 5 && (
                    <line x1="60" y1="60" x2="70" y2="80" stroke="black" strokeWidth="4" />
                )
            }
        </svg>
    )
}

export default HangmanFigure