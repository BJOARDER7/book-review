import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';


const ReadPages = () => {
  const [pages, setPages] = useState([]);

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  useEffect( () => {
    axios.get('/books.json')
    .then(data => {
      const booksItem = data.data;
      const books = booksItem.map(book => {
        const obj = {
          book: book.bookName,
          page: book.totalPages
        }
        return obj;
      })
      setPages(books);
    })
  }, [])

 

  console.log(pages)
  return (
    <div className="flex justify-center">
      
      <BarChart
      width={700}
      height={500}
      data={pages}
      margin={{
        top: 10,
        right: 10,
        left: 10,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="book" />
      <YAxis />
      <Bar dataKey="page" fill="#8884d8"  label={{ position: 'top' }}>
        {pages.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </div>
  );
};

export default ReadPages;