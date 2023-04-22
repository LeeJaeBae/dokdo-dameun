export default function breakWords(
    text: string,
    length: number,
    lineLength?: number,
) {
    const words = text.split(' ');
    const result = [];
    let line: string[] = [];

    for (const word of words) {
        if (line.reduce((p, c) => p + c.length, 0) + word.length <= length) {
            line.push(word);
        } else if (lineLength && result.length === lineLength - 1) {
            line.push(word);
        } else {
            result.push(line.join(' '));
            line = [];
            line.push(word);
        }
    }
    result.push(line.join(' '));

    return result.join('\n');
}
