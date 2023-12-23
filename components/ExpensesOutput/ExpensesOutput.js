import { StyleSheet, View } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'Buy Laptop',
        amount: 100.4,
        date: new Date('2023-12-19'),
    },

    {
        id: 'e2',
        description: 'Taxi',
        amount: 200.4,
        date: new Date('2023-12-19'),
    },

    {
        id: 'e3',
        description: 'Buy Printer',
        amount: 595.4,
        date: new Date('2021-12-19'),
    },

    {
        id: 'e4',
        description: 'Coffee',
        amount: 20.4,
        date: new Date('2021-12-19'),
    },

    {
        id: 'e5',
        description: 'Food',
        amount: 595.4,
        date: new Date('2022-12-19'),
    },

    {
        id: 'e6',
        description: 'A book',
        amount: 595.4,
        date: new Date('2022-12-19'),
    },
];

function ExpensesOutput({ expenses, expensePeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensePeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary,
    }
});