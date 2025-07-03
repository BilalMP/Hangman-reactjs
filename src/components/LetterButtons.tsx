interface LetterButtonsProps {
    guessedLetters: Set<string>;
    handleGuess: (letter: string) => void;
}

const LetterButtons: React.FC<LetterButtonsProps> = ({ guessedLetters, handleGuess }) => {
    const letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    return (
        <div className="grid grid-cols-7 gap-2 mb-6">
            {letters.map((letter) => (
                <button
                    key={letter}
                    onClick={() => handleGuess(letter)}
                    disabled={guessedLetters.has(letter)}
                    className={`p-2 rounded-lg font-semibold text-white text-lg
                        ${guessedLetters.has(letter) ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}
                        `}
                >
                    {letter.toUpperCase()}
                </button>
            ))}
        </div>
    )
}

export default LetterButtons