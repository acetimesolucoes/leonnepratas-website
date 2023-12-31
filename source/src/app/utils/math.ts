export class MathUtils {
    static getRandomFloat(min: number, max: number, decimals: number) {
        const str = (Math.random() * (max - min) + min).toFixed(
            decimals,
        );

        return parseFloat(str);
    }
}