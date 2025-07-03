import { useEffect, useState } from 'react'
import WordDisplay from './WordDisplay';
import LetterButtons from './LetterButtons';
import GameStatus from './GameStatus';
import HangmanFigure from './HangmanFigure';

const Hangman: React.FC = () => {
    const words: string[] = ['react', 'angular', 'vue', 'svelte'];

    const [word, setWord] = useState<string>(words[Math.floor(Math.random() * words.length)]);
    const [guessLetter, setGuessLetter] = useState<Set<string>>(new Set());
    const [gameOver, setGamesOver] = useState<boolean>(false);
    const [won, setWon] = useState<boolean>(false);
    const [lives, setLives] = useState<number>(6);

    const incorrectGuesses: number = Array.from(guessLetter).filter(letter => !word.includes(letter)).length;

    const isWordComplete: boolean = word.split('').every(letter => guessLetter.has(letter));

    const handleGuess = (letter: string): void => {
        setGuessLetter((prev) => new Set(prev).add(letter));
        if (!word.includes(letter)) {
            setLives((prev) => prev - 1);
        }
    }

    const handleRestart = (): void => {
        setWord(words[Math.floor(Math.random() * words.length)]);
        setGuessLetter(new Set());
        setGamesOver(false);
        setWon(false);
        setLives(6);
    }

    useEffect(() => {
        if (incorrectGuesses >= 6) {
            setGamesOver(true);
            setWon(false);
        } else if (isWordComplete) {
            setGamesOver(true);
            setWon(true);
        }
    }, [incorrectGuesses, isWordComplete])

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent): void => {
            const letter = event.key.toLowerCase();
            if (/^[a-z]$/.test(letter) && !gameOver && !guessLetter.has(letter)) {
                handleGuess(letter);
            }
        };
        window.addEventListener('keypress', handleKeyPress);
        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        }
    }, [guessLetter, gameOver])

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                    Hangman
                </h1>
                <p className="text-lg mb-2 text-gray-600">Lives :{lives}</p>
                <HangmanFigure incorrectGuesses={incorrectGuesses} />
                <WordDisplay word={word} guessedLetter={guessLetter} />
                {!gameOver && <LetterButtons guessedLetters={guessLetter} handleGuess={handleGuess} />}
                {gameOver && <GameStatus won={won} word={word} handleRestart={handleRestart} />}
            </div>
        </div>
    )
}

export default Hangman