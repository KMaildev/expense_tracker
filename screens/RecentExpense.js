import { Text } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

function RecentExpense() {
    return <ExpensesOutput expensePeriod="Last 7 Days" />
}

export default RecentExpense;