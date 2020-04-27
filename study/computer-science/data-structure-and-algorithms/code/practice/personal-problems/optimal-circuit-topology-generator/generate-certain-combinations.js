// Requirements:
// Let's suppose that you have N sets of choices, each choices has an set {number: [number], value: [number]}
// Each set can combine with one another or itself with two connections: Parallel, and series.
// For parallel, it follows the rules that the result of the connection R = (R1 * R2) / (R1 + R2)
// For series, R = R1 + R2

// Given a goal R value and N sets of choices, generate a connection combination that requires least connections and the closest value.
// Design this algorithm.

// 