export function clamp(num: number, min: number, max: number): number {
	if (num < min) return min;
	if (num > max) return max;
	return num;
}

export function progress(num: number, min: number, max: number): number {
	if (num < min) return 0;
	if (num > max) return 1;
	return (num - min) / (max - min);
}
