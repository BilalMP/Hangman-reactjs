interface WordDisplayProps {
    word: string;
    guessedLetter:Set<string>
}

const WordDisplay:React.FC<WordDisplayProps> = ({word,guessedLetter}) => {
    return (
        <div className="text-4xl font-mono mb-6 tracking-widest">
            {word.split('').map((letter, index) => (
                <span key={index} className="inline-block mx-1">
                    {guessedLetter.has(letter) ? letter : '_'}
                </span>
            ))}
        </div>
    )
}

export default WordDisplay