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

function calculateInvestment(data: InvestmentData): CalculationResult {} 

function printResults(results) {}

const results = calculateInvestment(...);

printResults(results);