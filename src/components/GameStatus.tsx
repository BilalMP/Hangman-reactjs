interface GameStatusProps {
    won: boolean;
    word: string;
    handleRestart: () => void
}

const GameStatus: React.FC<GameStatusProps> = ({ won, word, handleRestart }) => {
    return (
        <div className="mt-4">
            <p className={`text-2xl font-semibold mb-4${won ? 'text-green-600' : 'text-red-600'}`}>
                {won ? 'You won!' : `You lost! Word was "${word}"`}
            </p>
            <button
                onClick={handleRestart}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Play Again
            </button>
        </div>
    )
}

export default GameStatus