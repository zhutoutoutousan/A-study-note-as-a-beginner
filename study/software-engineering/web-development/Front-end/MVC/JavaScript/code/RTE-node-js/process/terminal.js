process.stdout.write("Hi, what's your name?\n");

process.stdin.on('readable', () => {
    const userInput = process.stdin.read();
    process.stdout.write(`Your Input was: ${userInput}`);
});
// https://dev.to/miku86/nodejs-how-to-talk-answer-to-the-terminal-4ldl