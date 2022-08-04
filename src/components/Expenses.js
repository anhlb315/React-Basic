import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "./Card";

function Expenses(props){
  const expenses=props.expenses;
  return(
    <Card className="expenses">
      {expenses.map(el=>(
        <ExpenseItem title={el.title} date={el.date} amount={el.amount}></ExpenseItem>
      ))}
    </Card>
  )
}

export default Expenses