type InvestmentData = {
    initialAmount: number;
    annualContrib: number;
    expectedReturn: number;
    duration: number;
};

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
}

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
    const { initialAmount, annualContrib, expectedReturn, duration } = data;

    if (initialAmount < 0) {
        return 'Initial investment amount must be atleast zero.'
    }
    if (duration <= 0) {
        return 'No valid amount of years provided.';
    }
    if (expectedReturn < 0) {
        return 'Expected return must be atleast zero.';
    }

    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;

    const annualResults: InvestmentResult[] = [];

    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContrib;
        total = total + annualContrib;

        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalContributions,
            totalInterestEarned
        })
    }

    return annualResults;
}

function printResults(results: CalculationResult) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }

    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log(`----------------------------`)
    }
}

const results = calculateInvestment(...);

printResults(results);