import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card.js';
import ExpenseFilter from './ExpensesFilter.js';
import './Expenses.css'
function Expenses (props)
{

    const filterChangeHandler = (selectedYear) =>
    {
        console.log(selectedYear);
    }

    return (

        <div>

            <Card className='expenses'>
                <ExpenseFilter onChangeFilter={ filterChangeHandler } />
                <ExpenseItem
                    title={ props.items[0].title }
                    amount={ props.items[0].amount }
                    date={ props.items[0].date }>
                </ExpenseItem>
                <ExpenseItem
                    title={ props.items[1].title }
                    amount={ props.items[1].amount }
                    date={ props.items[1].date }>
                </ExpenseItem>
                <ExpenseItem
                    title={ props.items[2].title }
                    amount={ props.items[2].amount }
                    date={ props.items[2].date }>
                </ExpenseItem>
                <ExpenseItem
                    title={ props.items[3].title }
                    amount={ props.items[3].amount }
                    date={ props.items[3].date }>
                </ExpenseItem>
            </Card>
        </div>
    );
}

export default Expenses;