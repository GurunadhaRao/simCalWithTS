type InvestmentData = {
    initialAmount: number; 
    annualContrib: number;
    expectedReturn: number;
    duration: number;
};

function calculateInvestment(data: InvestmentData) {} 

function printResults(results) {}

const results = calculateInvestment(...);

printResults(results);