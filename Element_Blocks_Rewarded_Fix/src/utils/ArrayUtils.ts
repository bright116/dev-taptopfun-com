namespace BlockPuzzle {
    export class ArrayUtils {

        static uniteArrays<T>(sourceArray: Array<T>, targetArray: Array<T>): Array<T> {
            return sourceArray.concat(targetArray.filter(targetElem => sourceArray.indexOf(targetElem) === -1));
        }

        static getRandomItem<T>(array: Array<T>, compressionFactor: number) {
            const randomIndex: number = Math.floor(array.length * Math.pow(Math.random(), compressionFactor));
            return array[randomIndex];
        }
    }
}